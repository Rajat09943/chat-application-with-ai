from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os

from PIL import Image
import pytesseract
import base64
import io

# Load .env variables
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Setup Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# 🧠 Gemini AI Chat Route
@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    prompt = data.get('prompt')  # match key from frontend
    print("Prompt received:", prompt)
    model = genai.GenerativeModel('gemini-1.5-pro')
    response = model.generate_content(prompt)
    print("Gemini response:", response.text)
    return jsonify({'response': response.text})


# 🖼️ OCR Route for extracting text from image
@app.route('/extract-text', methods=['POST'])
def extract_text():
    try:
        data = request.get_json()
        image_data = data['image']

        # Remove base64 header like "data:image/jpeg;base64,"
        image_data = image_data.split(',')[1]
        image_bytes = base64.b64decode(image_data)

        image = Image.open(io.BytesIO(image_bytes))

        # ✅ Configure Tesseract path if using Windows
        pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

        extracted_text = pytesseract.image_to_string(image)

        return jsonify({'text': extracted_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Run the Flask server
if __name__ == '__main__':
    app.run(port=5002)
