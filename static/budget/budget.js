$(function() {
    let total = parseFloat(document.getElementById("TotalBudget").textContent);
    let table = document.getElementById("BudgetTable");
    let rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length - 1; i++) {
        let amount = parseFloat(rows[i].getElementsByTagName("span")[0].textContent);
        total -= amount;
        let row = rows[i].getElementsByTagName("span")[1].textContent = total;
    }
});
