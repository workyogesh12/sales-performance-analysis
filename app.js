const salesData = [
  { orderId: 1001, date: "2026-01-05", region: "South", category: "Technology", product: "Laptop", sales: 55000, profit: 8000, quantity: 1 },
  { orderId: 1002, date: "2026-01-08", region: "North", category: "Furniture", product: "Office Chair", sales: 7500, profit: 1200, quantity: 2 },
  { orderId: 1003, date: "2026-01-12", region: "West", category: "Office Supplies", product: "Notebook Pack", sales: 1200, profit: 300, quantity: 10 },
  { orderId: 1004, date: "2026-01-15", region: "East", category: "Technology", product: "Wireless Mouse", sales: 1800, profit: 450, quantity: 3 },
  { orderId: 1005, date: "2026-02-02", region: "South", category: "Furniture", product: "Study Table", sales: 12000, profit: 1800, quantity: 1 },
  { orderId: 1006, date: "2026-02-10", region: "North", category: "Technology", product: "Keyboard", sales: 2500, profit: 600, quantity: 2 },
  { orderId: 1007, date: "2026-02-14", region: "West", category: "Office Supplies", product: "Pen Set", sales: 800, profit: 200, quantity: 20 },
  { orderId: 1008, date: "2026-02-20", region: "East", category: "Technology", product: "Monitor", sales: 16000, profit: 2500, quantity: 1 },
  { orderId: 1009, date: "2026-03-04", region: "South", category: "Technology", product: "Smartphone", sales: 30000, profit: 5000, quantity: 1 },
  { orderId: 1010, date: "2026-03-07", region: "North", category: "Furniture", product: "Bookshelf", sales: 9500, profit: 1300, quantity: 1 },
  { orderId: 1011, date: "2026-03-13", region: "West", category: "Office Supplies", product: "Printer Paper", sales: 1500, profit: 350, quantity: 15 },
  { orderId: 1012, date: "2026-03-21", region: "East", category: "Furniture", product: "Sofa Chair", sales: 18000, profit: 2200, quantity: 1 },
  { orderId: 1013, date: "2026-04-01", region: "South", category: "Office Supplies", product: "Desk Organizer", sales: 2200, profit: 500, quantity: 4 },
  { orderId: 1014, date: "2026-04-06", region: "North", category: "Technology", product: "Tablet", sales: 22000, profit: 3500, quantity: 1 },
  { orderId: 1015, date: "2026-04-12", region: "West", category: "Furniture", product: "Cabinet", sales: 14000, profit: 1600, quantity: 1 },
  { orderId: 1016, date: "2026-04-20", region: "East", category: "Office Supplies", product: "Marker Set", sales: 900, profit: 180, quantity: 8 },
  { orderId: 1017, date: "2026-05-03", region: "South", category: "Technology", product: "Headphones", sales: 4500, profit: 900, quantity: 2 },
  { orderId: 1018, date: "2026-05-08", region: "North", category: "Office Supplies", product: "Files Folder", sales: 1100, profit: 250, quantity: 12 },
  { orderId: 1019, date: "2026-05-15", region: "West", category: "Technology", product: "Printer", sales: 12500, profit: 2000, quantity: 1 },
  { orderId: 1020, date: "2026-05-22", region: "East", category: "Furniture", product: "Office Desk", sales: 15000, profit: 2100, quantity: 1 },
  { orderId: 1021, date: "2026-06-02", region: "South", category: "Furniture", product: "Ergonomic Chair", sales: 11000, profit: 1700, quantity: 1 },
  { orderId: 1022, date: "2026-06-07", region: "North", category: "Technology", product: "External Hard Disk", sales: 6500, profit: 1200, quantity: 2 },
  { orderId: 1023, date: "2026-06-12", region: "West", category: "Office Supplies", product: "Stapler", sales: 700, profit: 160, quantity: 5 },
  { orderId: 1024, date: "2026-06-18", region: "East", category: "Technology", product: "Webcam", sales: 3500, profit: 700, quantity: 2 },
  { orderId: 1025, date: "2026-07-02", region: "South", category: "Technology", product: "Laptop", sales: 57000, profit: 8500, quantity: 1 },
  { orderId: 1026, date: "2026-07-09", region: "North", category: "Furniture", product: "Office Chair", sales: 8000, profit: 1300, quantity: 2 },
  { orderId: 1027, date: "2026-07-17", region: "West", category: "Office Supplies", product: "Notebook Pack", sales: 1600, profit: 400, quantity: 12 },
  { orderId: 1028, date: "2026-07-23", region: "East", category: "Technology", product: "Monitor", sales: 17000, profit: 2700, quantity: 1 },
  { orderId: 1029, date: "2026-08-04", region: "South", category: "Furniture", product: "Study Table", sales: 13000, profit: 1900, quantity: 1 },
  { orderId: 1030, date: "2026-08-11", region: "North", category: "Technology", product: "Smartphone", sales: 32000, profit: 5200, quantity: 1 },
  { orderId: 1031, date: "2026-08-16", region: "West", category: "Office Supplies", product: "Pen Set", sales: 950, profit: 230, quantity: 25 },
  { orderId: 1032, date: "2026-08-21", region: "East", category: "Furniture", product: "Sofa Chair", sales: 19000, profit: 2500, quantity: 1 },
  { orderId: 1033, date: "2026-09-02", region: "South", category: "Technology", product: "Tablet", sales: 23000, profit: 3600, quantity: 1 },
  { orderId: 1034, date: "2026-09-10", region: "North", category: "Office Supplies", product: "Printer Paper", sales: 1800, profit: 420, quantity: 18 },
  { orderId: 1035, date: "2026-09-14", region: "West", category: "Furniture", product: "Cabinet", sales: 15500, profit: 1800, quantity: 1 },
  { orderId: 1036, date: "2026-09-24", region: "East", category: "Technology", product: "Keyboard", sales: 2800, profit: 650, quantity: 2 }
];

function formatCurrency(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function groupBySum(data, key, valueKey) {
  const result = {};

  data.forEach(item => {
    const group = item[key];

    if (!result[group]) {
      result[group] = 0;
    }

    result[group] += item[valueKey];
  });

  return result;
}

function getMonthName(dateString) {
  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    month: "short"
  });
}

function calculateKPIs() {
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
  const totalOrders = salesData.length;

  const salesByRegion = groupBySum(salesData, "region", "sales");

  const sortedRegions = Object.entries(salesByRegion).sort((a, b) => b[1] - a[1]);

  const bestRegion = sortedRegions[0][0];
  const worstRegion = sortedRegions[sortedRegions.length - 1][0];

  document.getElementById("totalSales").textContent = formatCurrency(totalSales);
  document.getElementById("totalProfit").textContent = formatCurrency(totalProfit);
  document.getElementById("totalOrders").textContent = totalOrders;
  document.getElementById("bestRegion").textContent = bestRegion;

  return {
    totalSales,
    totalProfit,
    totalOrders,
    bestRegion,
    worstRegion
  };
}

function createInsights(kpis) {
  const salesByCategory = groupBySum(salesData, "category", "sales");
  const profitByRegion = groupBySum(salesData, "region", "profit");

  const topCategory = Object.entries(salesByCategory).sort((a, b) => b[1] - a[1])[0];
  const topProfitRegion = Object.entries(profitByRegion).sort((a, b) => b[1] - a[1])[0];

  const profitMargin = ((kpis.totalProfit / kpis.totalSales) * 100).toFixed(2);

  const insights = [
    `The total sales generated by the store is ${formatCurrency(kpis.totalSales)}.`,
    `The total profit earned is ${formatCurrency(kpis.totalProfit)} with a profit margin of ${profitMargin}%.`,
    `${kpis.bestRegion} region has the highest sales performance.`,
    `${kpis.worstRegion} region has the lowest sales performance and needs improvement.`,
    `${topCategory[0]} is the highest sales category with ${formatCurrency(topCategory[1])} in sales.`,
    `${topProfitRegion[0]} region generated the highest profit of ${formatCurrency(topProfitRegion[1])}.`
  ];

  const insightsList = document.getElementById("insightsList");
  insightsList.innerHTML = "";

  insights.forEach(insight => {
    const li = document.createElement("li");
    li.textContent = insight;
    insightsList.appendChild(li);
  });
}

function createCategoryChart() {
  const salesByCategory = groupBySum(salesData, "category", "sales");

  new Chart(document.getElementById("categoryChart"), {
    type: "bar",
    data: {
      labels: Object.keys(salesByCategory),
      datasets: [{
        label: "Sales",
        data: Object.values(salesByCategory),
        backgroundColor: ["#1f6f8b", "#99a8b2", "#f5b041"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function createRegionChart() {
  const profitByRegion = groupBySum(salesData, "region", "profit");

  new Chart(document.getElementById("regionChart"), {
    type: "pie",
    data: {
      labels: Object.keys(profitByRegion),
      datasets: [{
        data: Object.values(profitByRegion),
        backgroundColor: ["#1f6f8b", "#28b463", "#f5b041", "#e74c3c"]
      }]
    },
    options: {
      responsive: true
    }
  });
}

function createMonthlyChart() {
  const monthlySales = {};

  salesData.forEach(item => {
    const month = getMonthName(item.date);

    if (!monthlySales[month]) {
      monthlySales[month] = 0;
    }

    monthlySales[month] += item.sales;
  });

  new Chart(document.getElementById("monthlyChart"), {
    type: "line",
    data: {
      labels: Object.keys(monthlySales),
      datasets: [{
        label: "Monthly Sales",
        data: Object.values(monthlySales),
        borderColor: "#1f6f8b",
        backgroundColor: "rgba(31, 111, 139, 0.2)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5
      }]
    },
    options: {
      responsive: true
    }
  });
}

function createProductChart() {
  const productSales = groupBySum(salesData, "product", "sales");

  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  new Chart(document.getElementById("productChart"), {
    type: "bar",
    data: {
      labels: topProducts.map(item => item[0]),
      datasets: [{
        label: "Sales",
        data: topProducts.map(item => item[1]),
        backgroundColor: "#f5b041"
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function showTableData() {
  const tableBody = document.getElementById("salesTableBody");

  tableBody.innerHTML = "";

  salesData.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.orderId}</td>
      <td>${item.date}</td>
      <td>${item.region}</td>
      <td>${item.category}</td>
      <td>${item.product}</td>
      <td>${formatCurrency(item.sales)}</td>
      <td>${formatCurrency(item.profit)}</td>
      <td>${item.quantity}</td>
    `;

    tableBody.appendChild(row);
  });
}

function initializeDashboard() {
  const kpis = calculateKPIs();

  createInsights(kpis);

  createCategoryChart();

  createRegionChart();

  createMonthlyChart();

  createProductChart();

  showTableData();
}

initializeDashboard();