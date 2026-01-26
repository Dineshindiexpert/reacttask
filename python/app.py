from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app) # इससे ब्राउज़र की एरर खत्म हो जाएगी

# डेटाबेस फाइल का रास्ता
DB_FILE = "database.json"

@app.route('/save', methods=['POST'])
def save_data():
    try:
        new_data = request.json
        
        # अगर फाइल पहले से नहीं है, तो एक खाली लिस्ट बनाओ
        if not os.path.exists(DB_FILE):
            with open(DB_FILE, 'w') as f:
                json.dump([], f)

        # पुराना डेटा पढ़ो और नया जोड़ो
        with open(DB_FILE, 'r+') as f:
            file_data = json.load(f)
            file_data.append(new_data)
            f.seek(0)
            json.dump(file_data, f, indent=4)
        
        print("Data Saved Successfully!")
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"status": "error"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
