// ========================================
// API 設定
// ========================================

// 載入環境變數
require("dotenv").config({ path: ".env" });

// API 設定（從 .env 讀取）
const API_PATH = process.env.API_PATH;
const BASE_URL = "https://livejs-api.hexschool.io";
const ADMIN_TOKEN = process.env.API_KEY;

module.exports = {
  API_PATH,
  BASE_URL,
  ADMIN_TOKEN,
};

/*

本週作業分為五個檔案/模組，請依照說明完成對應的功能要求：

api.js：API 請求模組
utils.js：工具函式模組
productService.js：產品服務
cartService.js：購物車服務
orderService.js：訂單服務

*/
