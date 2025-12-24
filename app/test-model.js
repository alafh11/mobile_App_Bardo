import Tflite from "tflite-react-native";

const tflite = new Tflite();

export function loadModel() {
    tflite.loadModel(
        {
            model: "assets/ai/embedding_model.tflite",
        },
        (err, res) => {
            console.log("MODEL LOAD:", err, res);
        }
    );
}
