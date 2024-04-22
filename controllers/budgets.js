import { Budget } from "../models/budget.js"

function newBudget(req, res){
  res.render('budgets/new',{
    title: 'Add Budget'
  })
}

function create(req, res){
  for(let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  Budget.create(req.body)
  .then(budget =>{
    res.redirect('/budgets')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res){
  Budget.find({})
  .then(budgets =>{
    res.render('budgets/index', {
      budgets,
      title: `Your Budget`
    })
  })
}

function deleteBudget(res,req){
  Budget.findByIdAndDelete(req.params.budgetId)
  .then(budget =>{
    res.redirect('/budgets')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  Budget.findById(req.params.budgetId)
  .then(budget =>{
    res.render('budgets/show',{
      budget,
      title: 'View Your Budget'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function addExpense(req, res){
  Budget.find(req.params.budgetId)
  .then(budget =>{
    budget.expenses.push(req.body)
    budget.save()
    .then(()=>{
      res.redirect(`/budgets/${budget.id}`)
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/budgets')
  })
}

function edit(req, res){
  Budget.findById(req.params.budgetId)
  .then(budget =>{
    res.render('budgets/edit',{
      budget,
      title: 'Edit Budget'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
    })
}

function update(req, res){
  for(let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  Budget.findByIdAndUpdate(req.params.budgetId, req.body, {new: true})
  .then(budget =>{
    res.redirect(`/budgets/${budget._id}`)
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/budgets')
    })
}

export {
  newBudget as new,
  create,
  index,
  deleteBudget as delete,
  show,
  addExpense,
  edit,
  update,
}