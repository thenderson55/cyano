from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

import os

# Init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Product Class/Model
class Print(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)
  description = db.Column(db.String(300))
  category = db.Column(db.String(50))
  price_code = db.Column(db.Integer)
  size_code = db.Column(db.Integer)

  def __init__(self, name, description, category, price_code, size_code):
    self.name = name
    self.description = description
    self.category = category
    self.price_code = price_code
    self.size_code = size_code

# Product Schema
class PrintSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'description', 'category', 'price_code', 'size_code')

# Init Schema
print_schema = PrintSchema(strict=True)
prints_schema = PrintSchema(many=True, strict=True)

# Create Print
@app.route('/print', methods=['POST'])
def add_print():
  name = request.json['name']
  description = request.json['description']
  category = request.json['category']
  price_code = request.json['price_code']
  size_code = request.json['size_code']

  new_print = Print(name, description, category, price_code, size_code)

  db.session.add(new_print)
  db.session.commit()

  return print_schema.jsonify(new_print)

# Get All Prints
@app.route('/print', methods=['GET'])
def get_prints():
  all_prints = Print.query.all()
  result = prints_schema.dump(all_prints)
  return jsonify(result.data)

# Get Single Print
@app.route('/print/<id>', methods=['GET'])
def get_print(id):
  print = Print.query.get(id)
  return print_schema.jsonify(print)

# Update Print
@app.route('/print/<id>', methods=['PUT'])
def update_print(id):
  print = Print.query.get(id)

  name = request.json['name']
  description = request.json['description']
  category = request.json['category']
  price_code = request.json['price_code']
  size_code = request.json['size_code']

  print.name = name
  print.description = description
  print.category =category
  print.price_code = price_code
  print.size_code = size_code

  db.session.commit()

  return print_schema.jsonify(print)

# Delete Single Print
@app.route('/print/<id>', methods=['DELETE'])
def delete_print(id):
  print = Print.query.get(id)
  db.session.delete(print)
  db.session.commit()
  
  return print_schema.jsonify(print)


# Run Server
if __name__ == '__main__':
  app.run(debug=True)
