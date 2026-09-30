# Qwen-Image-2.1 Uncensored GGUF — ComfyUI setup

This folder has ready-to-import workflows for
[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF).

## Files

| File | Use |
| --- | --- |
| `workflows/qwen-image-2.1-uc-gguf-text2image-simple.json` | **Start here** — flat text-to-image graph |
| `workflows/qwen-image-2.1-uc-gguf-text2image.json` | Full UI template (resolution picker + subgraph) |
| `workflows/qwen-image-2.1-uc-gguf-image-edit.json` | Image edit / I2I template |
| `workflows/qwen-image-2.1-uc-gguf-text2image-api.json` | API / script format (not for drag-drop) |

---

## Step 1 — Install / update ComfyUI

Use a current ComfyUI build that includes native Qwen-Image-2.1 nodes
(`TextEncodeQwenImage21`, CLIP type `qwen_image`).

- Desktop app: update from the app menu
- Portable / git install:

```bash
cd ComfyUI
git pull
```

Restart ComfyUI after updating.

---

## Step 2 — Install ComfyUI-GGUF (required)

Qwen-Image 2.1 GGUF needs a loader that understands architecture `qwen_image`.
Use the **leejet** fork (recommended by the model card):

```bash
cd ComfyUI/custom_nodes
# remove old city96 install if you hit "Unknown model architecture"
rm -rf ComfyUI-GGUF
git clone https://github.com/leejet/ComfyUI-GGUF
```

Or install / update **ComfyUI-GGUF** from ComfyUI Manager, then confirm it can
load Qwen-Image 2.1 GGUFs.

Restart ComfyUI after installing.

---

## Step 3 — Download model files

From
[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF):

**Recommended (balanced):**

| File | Put in |
| --- | --- |
| `qwen-image-2.1-UC-Q4_K_M.gguf` (~4.6 GB) | `ComfyUI/models/diffusion_models/` |
| `text_encoders/qwen3vl_8b_int8_convrot.safetensors` (~9.35 GB) | `ComfyUI/models/text_encoders/` |
| `vae/qwen_image_2.1_vae_bf16.safetensors` (~676 MB) | `ComfyUI/models/vae/` |

Final layout:

```text
ComfyUI/
└── models/
    ├── diffusion_models/
    │   └── qwen-image-2.1-UC-Q4_K_M.gguf
    ├── text_encoders/
    │   └── qwen3vl_8b_int8_convrot.safetensors
    └── vae/
        └── qwen_image_2.1_vae_bf16.safetensors
```

Direct download links:

- GGUF: https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF/resolve/main/qwen-image-2.1-UC-Q4_K_M.gguf
- Text encoder: https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF/resolve/main/text_encoders/qwen3vl_8b_int8_convrot.safetensors
- VAE: https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF/resolve/main/vae/qwen_image_2.1_vae_bf16.safetensors

Optional: use a higher quant (`Q5_K_M`, `Q6_K`, `Q8_0`) if you have more VRAM.
Then pick that file in **Unet Loader (GGUF)** instead of `Q4_K_M`.

---

## Step 4 — Load the workflow in ComfyUI

1. Open ComfyUI in the browser.
2. Drag and drop  
   `comfyui/workflows/qwen-image-2.1-uc-gguf-text2image-simple.json`  
   onto the canvas  
   **or** use **Load** / **Workflows → Open** and select that file.
3. If ComfyUI says a node is missing:
   - `UnetLoaderGGUF` → ComfyUI-GGUF not installed / wrong fork
   - `TextEncodeQwenImage21` → ComfyUI is too old; update it

---

## Step 5 — Confirm node settings

On the loaded graph, check:

1. **Unet Loader (GGUF)** → `qwen-image-2.1-UC-Q4_K_M.gguf`  
   (or whichever UC GGUF you downloaded)
2. **Load CLIP** → `qwen3vl_8b_int8_convrot.safetensors`  
   and **type** = `qwen_image` (required)
3. **Load VAE** → `qwen_image_2.1_vae_bf16.safetensors`
4. **TextEncodeQwenImage21** → `resolution` = `1024` to start  
   (raise later for ~2K; needs more VRAM)
5. **KSampler** defaults that work well:
   - steps: `25`
   - cfg: `1`
   - sampler: `euler`
   - scheduler: `simple`
   - denoise: `1.0`

---

## Step 6 — Generate

1. Edit the prompt in **TextEncodeQwenImage21**.
2. Click **Queue Prompt** (or `Ctrl` / `Cmd` + `Enter`).
3. Output lands in `ComfyUI/output/` (prefix `qwen-image-2.1-uc` for the simple workflow).

---

## Step 7 — Image edit (optional)

1. Load `workflows/qwen-image-2.1-uc-gguf-image-edit.json`.
2. Confirm the same GGUF / CLIP / VAE filenames as above.
3. Attach a reference image and write an edit instruction in the prompt.
4. Queue Prompt.

---

## Memory tips

- Keep the **GGUF diffusion model on GPU**; let the **text encoder sit in system RAM** when possible.
- If you OOM, start ComfyUI with low VRAM mode:

```bash
python main.py --lowvram
```

- Or drop to `Q4_0` / stick with `Q4_K_M`, keep resolution at 1024², and use the int8 text encoder.

---

## Build the graph yourself (manual)

If you prefer not to import JSON:

1. Add **Unet Loader (GGUF)** → select the UC `.gguf`
2. Add **Load CLIP** → text encoder, type `qwen_image`
3. Add **Load VAE** → Qwen Image 2.1 VAE
4. Add **TextEncodeQwenImage21** → connect CLIP; set prompt + resolution (e.g. `1024`)
5. Add **KSampler** → model + positive/negative + latent from the text-encode node  
   (`25` / `1` / `euler` / `simple`)
6. Add **VAE Decode** → samples + VAE
7. Add **Save Image** → connect IMAGE

Wire:  
`UnetLoaderGGUF → KSampler.model`  
`CLIPLoader → TextEncodeQwenImage21.clip`  
`TextEncodeQwenImage21.positive → KSampler.positive`  
`TextEncodeQwenImage21.negative → KSampler.negative`  
`TextEncodeQwenImage21.latent → KSampler.latent_image`  
`KSampler → VAEDecode → SaveImage`  
`VAELoader → VAEDecode.vae`

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `Unknown model architecture` / `Unexpected architecture type: 'qwen_image'` | Replace city96 ComfyUI-GGUF with [leejet/ComfyUI-GGUF](https://github.com/leejet/ComfyUI-GGUF) |
| Red missing node `TextEncodeQwenImage21` | Update ComfyUI to a build with Qwen-Image-2.1 support |
| CLIP dropdown empty / wrong type | File must be under `models/text_encoders/`; type must be `qwen_image` |
| Black / broken output | Wrong VAE, or CLIP type not `qwen_image` |
| CUDA OOM | `--lowvram`, lower resolution, or smaller GGUF quant |

---

## Notes

- This UC GGUF has no built-in safety filter; output depends only on your prompts and local use.
- License follows the Qwen Research license on the Hugging Face model card.
