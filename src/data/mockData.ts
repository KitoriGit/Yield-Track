// src/data/mockData.ts

// Simulamos los precios del mercado en tiempo real
export const marketCatalog: Record<string, { name: string, currentPrice: number, dailyChange: number }> = {
    AMD: { name: "Advanced Micro Devices", currentPrice: 152.50, dailyChange: 1.5 },
    NVDA: { name: "NVIDIA Corp", currentPrice: 850.20, dailyChange: -2.3 },
    MELI: { name: "Mercado Libre", currentPrice: 1500.00, dailyChange: 4.1 },
    SPY: { name: "S&P 500 ETF", currentPrice: 510.10, dailyChange: 0.5 },
};

// Simulamos las compras que ya hiciste
export const mockPortfolio = [
    { id: "1", ticker: "AMD", units: 10, purchasePrice: 145.00, date: "2024-03-01" },
    { id: "2", ticker: "NVDA", units: 2, purchasePrice: 800.00, date: "2024-02-15" },
    { id: "3", ticker: "MELI", units: 1, purchasePrice: 1450.00, date: "2024-01-20" },
];