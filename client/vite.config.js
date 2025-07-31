/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 Change port from 5173 to 3000
    // proxy: {
    //     "/api": {
    //         target: "https://e-commerce-mgtd.onrender.com",
    //         changeOrigin: true,
    //         secure: false,
    //         configure: (proxy, _options) => {
    //             proxy.on("error", (err, _req, _res) => {
    //                 console.log("proxy error", err);
    //             });
    //             proxy.on("proxyReq", (proxyReq, req, _res) => {
    //                 console.log(
    //                     "Sending Request to the Target:",
    //                     req.method,
    //                     req.url
    //                 );
    //             });
    //             proxy.on("proxyRes", (proxyRes, req, _res) => {
    //                 console.log(
    //                     "Received Response from the Target:",
    //                     proxyRes.statusCode,
    //                     req.url
    //                 );
    //             });
    //         },
    //     },
    // },
  },
});

