from flask import Flask, request, jsonify

app = Flask(__name__)

def calculate(operation, number1, number2):
    if operation == 'add':
        return number1 + number2
    elif operation == 'subtract':
        return number1 - number2
    elif operation == 'multiply':
        return number1 * number2
    elif operation == 'divide':
        if number2 == 0:
            return "Error: Division by zero."
        return number1 / number2
    else:
        return "Error: Invalid operation."

@app.route('/calculate', methods=['POST'])
def handle_calculate():
    data = request.json
    operation = data.get('operation')
    number1 = data.get('number1')
    number2 = data.get('number2')

    # Validate input
    if operation is None or number1 is None or number2 is None:
        return jsonify({"error": "Missing data"}), 400
    try:
        number1 = int(number1)
        number2 = int(number2)
    except ValueError:
        return jsonify({"error": "Invalid number"}), 400

    result = calculate(operation, number1, number2)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
