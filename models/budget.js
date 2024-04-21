import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
  name: String,
  expenses: String,
  income: {
    type:Number,
    min: 1
  },
  month: String,
  purpose: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}, 
},{
  timestamps: true,
})

const Budget = mongoose.model('Budget', budgetSchema)

export {
  Budget
}