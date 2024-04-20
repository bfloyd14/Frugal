import { Budget } from "../models/budget.js"

function newBudget(req, res){
  res.render('budgets/new',{
    title: 'Add Budget'
  })
}


export {
  newBudget as new
}