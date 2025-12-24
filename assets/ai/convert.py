import numpy as np
import json

# Convert .npy to .json
embeddings = np.load("embeddings.npy")
with open("embeddings.json", "w") as f:
    json.dump(embeddings.tolist(), f)
print("✅ Embeddings converted!")
