// Default Parameters

function bankManagementSystem(data1, data2, data3, data4) {
  const user_bank_manager = data1;
  const user_bank_account_number = data2;
  const user_bank_branch_name = data3;
  const user_current_balance = data4;

  console.log(user_bank_account_number);
  console.log(user_bank_branch_name);
  console.log(user_bank_manager);
  console.log(user_current_balance);
}

const data1 = "Rakesh Kumbar";
const data2 = "E171010101119";
const data3 = "BAREILLY'UP";
const data4 = "16K";
bankManagementSystem(data1, data2, data3, data4);
console.log("----------------------------------");

// Example-1 let's understand the problem,we can face,Why needed
// This is one way to solve this problem
function bankManagementSystem1(newdata1, newdata2, newdata3, newdata4) {
  if (newdata4 == undefined) {
    newdata4 = "10K";
  }
  const user_bank_manager = newdata1;
  const user_bank_account_number = newdata2;
  const user_bank_branch_name = newdata3;
  const user_current_balance = newdata4;

  console.log(user_bank_account_number);
  console.log(user_bank_branch_name);
  console.log(user_bank_manager);
  console.log(user_current_balance);
}

const newdata1 = "Rakesh Kumbar";
const newdata2 = "E171010101119";
const newdata3 = "BAREILLY'UP";
const newdata4 = "16K";
bankManagementSystem1(newdata1, newdata2, newdata3);
console.log("----------------------------------");

// Example-3 Need of Default paramters
// pass as default parameter = "10k"
function bankManagementSystem2(
  updateDATA1,
  updateDATA2,
  updateDATA3,
  updateDATA4 = "10k"
) {
  const user_bank_manager = updateDATA1;
  const user_bank_account_number = updateDATA2;
  const user_bank_branch_name = updateDATA3;
  const user_current_balance = updateDATA4;

  console.log(user_bank_account_number);
  console.log(user_bank_branch_name);
  console.log(user_bank_manager);
  console.log(user_current_balance);
}

const updateDATA1 = "Rakesh Kumbar";
const updateDATA2 = "E171010101119";
const updateDATA3 = "BAREILLY'UP";
const updateDATA4 = "16K";
bankManagementSystem2(updateDATA1, updateDATA2, updateDATA3);
