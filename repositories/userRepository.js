const User = require("../models/user");

class userRepository {
  constructor(model) {
    this.model = model;
  }

  create(first, last, age, email) {
    const newUser = { first, last, age, email };
    const User = new this.model(newUser);
    return User.save();
  }
  findByFirst(name) {
      return this.model.find({"first": name})
  }
  filter(Ascend){
    if(Ascend == undefined){
      return this.model.find({}).sort([['first', 'descending']])
    }else{
      return this.model.find({}).sort([['first', 'ascending']])
    }
    
  }
  findAll() {
    return this.model.find();
  }
  find(ident) {
    return this.model.findById({"_id": ident})
  }
  deletebyId(id) {
    return this.model.findByIdAndDelete(id)
  }

  updateById(id, object) {
    const query = { "_id": id }
    console.log(object, id)

    return this.model.findOneAndUpdate(query, {$set: { first: object.first, last: object.last, age: object.age, email: object.email }}, {new: false})
  }
}

module.exports = new userRepository(User);
