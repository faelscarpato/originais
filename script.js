// Lista de links diretos das fotos do Postimg.cc
const photoLinks = [
    "https://i.postimg.cc/c4HZzbLc/20250301-192749.webp",
    "https://i.postimg.cc/T2QfC6fw/20250301-192752.webp",
    "https://i.postimg.cc/KvHFhDKh/20250301-193019.webp",
    "https://i.postimg.cc/K83bG3Lk/IMG-2812.webp",
    "https://i.postimg.cc/JhbWJwpR/IMG-2813.webp",
    "https://i.postimg.cc/NF0hWKB0/IMG-2814.webp",
    "https://i.postimg.cc/hjcR1CYT/IMG-2815.webp",
    "https://i.postimg.cc/zB7ZtCmM/IMG-2816.webp",
    "https://i.postimg.cc/vTSRMGZt/IMG-2817.webp",
    "https://i.postimg.cc/qMzVw61b/IMG-2818.webp",
    "https://i.postimg.cc/Wp9c0wwq/IMG-2819.webp",
    "https://i.postimg.cc/7YdvWPcx/IMG-2820.webp",
    "https://i.postimg.cc/fbQGM2Dp/IMG-2821.webp",
    "https://i.postimg.cc/s2PtxY2X/IMG-2822.webp",
    "https://i.postimg.cc/W32xkdD7/IMG-2823.webp",
    "https://i.postimg.cc/nz0gYnBf/IMG-2824.webp",
    "https://i.postimg.cc/0yD4XYDf/IMG-2825.webp",
    "https://i.postimg.cc/PfV0Crdm/IMG-2826.webp",
    "https://i.postimg.cc/zX9Mktbv/IMG-2827.webp",
    "https://i.postimg.cc/28qMhR5g/IMG-2828.webp",
    "https://i.postimg.cc/W4VHBd7P/IMG-2829.webp",
    "https://i.postimg.cc/fbvrDMHS/IMG-2830.webp",
    "https://i.postimg.cc/CM26FP47/IMG-2831.webp",
    "https://i.postimg.cc/nrNd0rLg/IMG-2832.webp",
    "https://i.postimg.cc/wM1fXL9D/IMG-2833.webp",
    "https://i.postimg.cc/tTSvn2GX/IMG-2834.webp",
    "https://i.postimg.cc/rFtZz1nk/IMG-2835.webp",
    "https://i.postimg.cc/qvVbKNSC/IMG-2836.webp",
    "https://i.postimg.cc/QdQ6JXZY/IMG-2837.webp",
    "https://i.postimg.cc/JhRpT91r/IMG-2838.webp",
    "https://i.postimg.cc/xdgtBtCK/IMG-2839.webp",
    "https://i.postimg.cc/633YKn2F/IMG-2840.webp",
    "https://i.postimg.cc/XJzxYq9q/IMG-2841.webp",
    "https://i.postimg.cc/0jKnMvCf/IMG-2842.webp",
    "https://i.postimg.cc/xqrRLZxS/IMG-2843.webp",
    "https://i.postimg.cc/8kFgBrKy/IMG-2844.webp",
    "https://i.postimg.cc/HWfDSsFT/IMG-2845.webp",
    "https://i.postimg.cc/GhG06n1G/IMG-2846.webp",
    "https://i.postimg.cc/MpwkS3W4/IMG-2847.webp",
    "https://i.postimg.cc/9QY6FP0f/IMG-2848.webp",
    "https://i.postimg.cc/Gp3ZBBTx/IMG-2849.webp",
    "https://i.postimg.cc/HLSFbpQD/IMG-2850.webp",
    "https://i.postimg.cc/cHr2mVmK/IMG-2851.webp",
    "https://i.postimg.cc/FR8qnDWT/IMG-2852.webp",
    "https://i.postimg.cc/VvtTyn2m/IMG-2853.webp",
    "https://i.postimg.cc/FFkwJXz8/IMG-2854.webp",
    "https://i.postimg.cc/28pMQ9B6/IMG-2855.webp",
    "https://i.postimg.cc/QxpP0gpq/IMG-2856.webp",
    "https://i.postimg.cc/pLRS79CM/IMG-2857.webp",
    "https://i.postimg.cc/Cx72VFrB/IMG-2858.webp",
    "https://i.postimg.cc/d0SSL5YJ/IMG-2859.webp",
    "https://i.postimg.cc/rppPVv7h/IMG-2860.webp",
    "https://i.postimg.cc/Hxcv5bYX/IMG-2861.webp",
    "https://i.postimg.cc/qRPbGgqY/IMG-2862.webp",
    "https://i.postimg.cc/x8LspYbd/IMG-2863.webp",
    "https://i.postimg.cc/bYnFw0Fj/IMG-2864.webp",
    "https://i.postimg.cc/qMdDht96/IMG-2865.webp",
    "https://i.postimg.cc/vHLqWYsq/IMG-2866.webp",
    "https://i.postimg.cc/g2ggTgr3/IMG-2867.webp",
    "https://i.postimg.cc/XYj2LRNV/IMG-2868.webp",
    "https://i.postimg.cc/mrhmf7FJ/IMG-2869.webp",
    "https://i.postimg.cc/rpbQ8z1m/IMG-2870.webp",
    "https://i.postimg.cc/gJZ4rdsK/IMG-2871.webp",
    "https://i.postimg.cc/L5FD170F/IMG-2872.webp",
    "https://i.postimg.cc/wM5VcVSy/IMG-2873.webp",
    "https://i.postimg.cc/RCwXBSNS/IMG-2874.webp",
    "https://i.postimg.cc/kX9wM0bx/IMG-2875.webp",
    "https://i.postimg.cc/g22D834j/IMG-2876.webp",
    "https://i.postimg.cc/cLkcm65m/IMG-2877.webp",
    "https://i.postimg.cc/FKfVnmMQ/IMG-2878.webp",
    "https://i.postimg.cc/25PFsMYL/IMG-2879.webp",
    "https://i.postimg.cc/4dVbsP4L/IMG-2880.webp",
    "https://i.postimg.cc/fys7LdJw/IMG-2881.webp",
    "https://i.postimg.cc/XqgfyvC9/IMG-2882.webp",
    "https://i.postimg.cc/BZ5czmVt/IMG-2883.webp",
    "https://i.postimg.cc/pX2YMKwC/IMG-2884.webp",
    "https://i.postimg.cc/J4P3rGmL/IMG-2885.webp",
    "https://i.postimg.cc/W1zGhTbJ/IMG-2886.webp",
    "https://i.postimg.cc/nhWvmgCS/IMG-2887.webp",
    "https://i.postimg.cc/MGj1m5B6/IMG-2888.webp",
    "https://i.postimg.cc/rmXxn4GS/IMG-2889.webp",
    "https://i.postimg.cc/k4Q8k5wL/IMG-2890.webp",
    "https://i.postimg.cc/T1TmGX41/IMG-2891.webp",
    "https://i.postimg.cc/8kbM4j76/IMG-2892.webp",
    "https://i.postimg.cc/jddNFtfk/IMG-2893.webp",
    "https://i.postimg.cc/zXtWm6SD/IMG-2894.webp",
    "https://i.postimg.cc/wj1N920X/IMG-2895.webp",
    "https://i.postimg.cc/Z5XdnNM1/IMG-2896.webp",
    "https://i.postimg.cc/QM5WTtLV/IMG-2897.webp",
    "https://i.postimg.cc/C1gnHgY7/IMG-2898.webp",
    "https://i.postimg.cc/XJkGszYb/IMG-2899.webp",
    "https://i.postimg.cc/gjcwQHx6/IMG-2900.webp",
    "https://i.postimg.cc/tJr1jn6v/IMG-2901.webp",
    "https://i.postimg.cc/44wHtq0v/IMG-2902.webp",
    "https://i.postimg.cc/286bxTps/IMG-2903.webp",
    "https://i.postimg.cc/W1qdB31S/IMG-2904.webp",
    "https://i.postimg.cc/MKFc3Rqv/IMG-2905.webp",
    "https://i.postimg.cc/N0hKBcyt/IMG-2906.webp",
    "https://i.postimg.cc/g0vn0TRZ/IMG-2907.webp",
    "https://i.postimg.cc/gJmrLHqB/IMG-2908.webp",
    "https://i.postimg.cc/NF0MpGn6/IMG-2909.webp",
    "https://i.postimg.cc/fLCycS8W/IMG-2910.webp",
    "https://i.postimg.cc/Kc944LKJ/IMG-2911.webp",
    "https://i.postimg.cc/VvHNTQy3/IMG-2912.webp",
    "https://i.postimg.cc/9Fr09MZV/IMG-2913.webp",
    "https://i.postimg.cc/5NT0SVSz/IMG-2914.webp",
    "https://i.postimg.cc/NjX0Nzdz/IMG-2915.webp",
    "https://i.postimg.cc/QMrdvJPx/IMG-2916.webp",
    "https://i.postimg.cc/tgt4bVQd/IMG-2917.webp",
    "https://i.postimg.cc/RFSVZV4k/IMG-2918.webp",
    "https://i.postimg.cc/3Rtr45wd/IMG-2919.webp",
    "https://i.postimg.cc/vTDY5q1X/IMG-2920.webp",
    "https://i.postimg.cc/ZngTH8pm/IMG-2921.webp",
    "https://i.postimg.cc/v8SHGsjK/IMG-2922.webp",
    "https://i.postimg.cc/hPz4jYRt/IMG-2923.webp",
    "https://i.postimg.cc/wBH9wTy1/IMG-2924.webp",
    "https://i.postimg.cc/sDkjZJ39/IMG-2925.webp",
    "https://i.postimg.cc/nhqHKQz8/IMG-2926.webp",
    "https://i.postimg.cc/Xv84mSdQ/IMG-2927.webp",
    "https://i.postimg.cc/gJ2mPSKd/IMG-2928.webp",
    "https://i.postimg.cc/sXHyfYnW/IMG-2929.webp",
    "https://i.postimg.cc/3Nyhkk6c/IMG-2930.webp",
    "https://i.postimg.cc/hvHBTSRP/IMG-2931.webp",
    "https://i.postimg.cc/gc5dfKLF/IMG-2932.webp",
    "https://i.postimg.cc/ZKdZZy69/IMG-2933.webp",
    "https://i.postimg.cc/Njvt0fxd/IMG-2934.webp",
    "https://i.postimg.cc/jS6bn0gt/IMG-2935.webp",
    "https://i.postimg.cc/0N8qpWFm/IMG-2936.webp",
    "https://i.postimg.cc/wB0YF5Yr/IMG-2937.webp",
    "https://i.postimg.cc/qRqVFtkv/IMG-2938.webp",
    "https://i.postimg.cc/Y9PKBp9f/IMG-2939.webp",
    "https://i.postimg.cc/vT6RQpxR/IMG-2940.webp",
    "https://i.postimg.cc/MXkCXd1n/IMG-2941.webp",
    "https://i.postimg.cc/3ryW4Ngh/IMG-2942.webp",
    "https://i.postimg.cc/1RLXpSHq/IMG-2943.webp",
    "https://i.postimg.cc/02DQn4WH/IMG-2944.webp",
    "https://i.postimg.cc/nhxLP1NV/IMG-2945.webp",
    "https://i.postimg.cc/Gmjpwy1F/IMG-2946.webp",
    "https://i.postimg.cc/TPY3R3RZ/IMG-2947.webp",
    "https://i.postimg.cc/W4Wbtczt/IMG-2948.webp",
    "https://i.postimg.cc/Jns7kYHx/IMG-2949.webp",
    "https://i.postimg.cc/yd21XhFH/IMG-2950.webp",
    "https://i.postimg.cc/x8H0skRb/IMG-2951.webp",
    "https://i.postimg.cc/sfZDf8rD/IMG-2952.webp",
    "https://i.postimg.cc/QxGNFb8g/IMG-2953.webp",
    "https://i.postimg.cc/L6t9L15c/IMG-2954.webp",
    "https://i.postimg.cc/Z5jJDzrj/IMG-2955.webp",
    "https://i.postimg.cc/5tRbb5KC/IMG-2956.webp",
    "https://i.postimg.cc/KYzx6pfb/IMG-2957.webp",
    "https://i.postimg.cc/wvRHvtnb/IMG-2958.webp",
    "https://i.postimg.cc/yxFHmM1m/IMG-2959.webp",
    "https://i.postimg.cc/pV8RMFdm/IMG-2960.webp",
    "https://i.postimg.cc/sD4zvC0y/IMG-2961.webp",
    "https://i.postimg.cc/HkWgMvfM/IMG-2962.webp",
    "https://i.postimg.cc/hGfRyz4P/IMG-2963.webp",
    "https://i.postimg.cc/SNkF0tQP/IMG-2964.webp",
    "https://i.postimg.cc/WzPR15Gh/IMG-2965.webp",
    "https://i.postimg.cc/sXWdzkZk/IMG-2966.webp",
    "https://i.postimg.cc/qB8V5drn/IMG-2967.webp",
    "https://i.postimg.cc/Mp3hQ60k/IMG-2968.webp",
    "https://i.postimg.cc/KYKC76Q1/IMG-2969.webp",
    "https://i.postimg.cc/KYdw00sJ/IMG-2970.webp",
    "https://i.postimg.cc/pTz74Kwx/IMG-2971.webp",
    "https://i.postimg.cc/rsTbkKT4/IMG-2972.webp",
    "https://i.postimg.cc/QNgwqkgJ/IMG-2973.webp",
    "https://i.postimg.cc/tC2cKqM1/IMG-2974.webp",
    "https://i.postimg.cc/HspKvcBD/IMG-2975.webp",
    "https://i.postimg.cc/bwr5877m/IMG-2976.webp",
    "https://i.postimg.cc/7ZRWLBDw/IMG-2977.webp",
    "https://i.postimg.cc/JhBdHb4J/IMG-2978.webp",
    "https://i.postimg.cc/rmXZ1KKH/IMG-2979.webp",
    "https://i.postimg.cc/C1GPmS8x/IMG-2980.webp",
    "https://i.postimg.cc/2yCHtMdF/IMG-2981.webp",
    "https://i.postimg.cc/hvMCRspF/IMG-2982.webp",
    "https://i.postimg.cc/3rZfGr7L/IMG-2983.webp",
    "https://i.postimg.cc/dttHjMVJ/IMG-2984.webp",
    "https://i.postimg.cc/Pr3666CY/IMG-2985.webp",
    "https://i.postimg.cc/QdFfvp7P/IMG-2986.webp",
    "https://i.postimg.cc/Z5XwmCFq/IMG-2987.webp",
    "https://i.postimg.cc/25v2Sr27/IMG-2988.webp",
    "https://i.postimg.cc/wvpFtZr8/IMG-2989.webp",
    "https://i.postimg.cc/TwJ0nQ8y/IMG-2990.webp",
    "https://i.postimg.cc/ZnYcH3Zw/IMG-2991.webp",
    "https://i.postimg.cc/RhPTDFZ4/IMG-2992.webp",
    "https://i.postimg.cc/7PXX6BMd/IMG-2993.webp",
    "https://i.postimg.cc/vHBh6W0B/IMG-2994.webp",
    "https://i.postimg.cc/tCM5dYcz/IMG-2996.webp",
    "https://i.postimg.cc/QdKqfjGZ/IMG-2997.webp",
    "https://i.postimg.cc/Lsd37G2Y/IMG-2998.webp",
    "https://i.postimg.cc/mrQyGVgd/IMG-2999.webp",
    "https://i.postimg.cc/C1SHMDZw/IMG-3000.webp",
    "https://i.postimg.cc/6qQrnXLS/IMG-3001.webp",
    "https://i.postimg.cc/TYpjPTP5/IMG-3002.webp",
    "https://i.postimg.cc/ZnDrLMwq/IMG-3003.webp",
    "https://i.postimg.cc/05tdxz9q/IMG-3004.webp",
    "https://i.postimg.cc/vHkrgC1q/IMG-3005.webp",
    "https://i.postimg.cc/RZtccGKM/IMG-3006.webp",
    "https://i.postimg.cc/5tM8pvS8/IMG-3007.webp",
    "https://i.postimg.cc/g0q87JgQ/IMG-3008.webp",
    "https://i.postimg.cc/W3NgcvK3/IMG-3009.webp",
    "https://i.postimg.cc/RhqtqTvx/IMG-3010.webp",
    "https://i.postimg.cc/1XTqFNzn/IMG-3011.webp",
    "https://i.postimg.cc/JnpJ1FVQ/IMG-3012.webp",
    "https://i.postimg.cc/WbBZbrKx/IMG-3013.webp",
    "https://i.postimg.cc/nVw7gN1F/IMG-3014.webp",
    "https://i.postimg.cc/xTJH2gsK/IMG-3015.webp",
    "https://i.postimg.cc/QdcTBCZC/IMG-3016.webp",
    "https://i.postimg.cc/pdxnKvPZ/IMG-3017.webp",
    "https://i.postimg.cc/rmZ06txn/IMG-3018.webp",
    "https://i.postimg.cc/G2m8Sj8T/IMG-3019.webp",
    "https://i.postimg.cc/pdZ5ZSTt/IMG-3020.webp",
    "https://i.postimg.cc/J0yyR4Q1/IMG-3021.webp",
    "https://i.postimg.cc/J09s0VTj/IMG-3022.webp",
    "https://i.postimg.cc/zDMb0KJ3/IMG-3023.webp",
    "https://i.postimg.cc/PrwLcJxy/IMG-3024.webp",
    "https://i.postimg.cc/8zgFVGfS/IMG-3025.webp",
    "https://i.postimg.cc/zGwyzQTR/IMG-3026.webp",
    "https://i.postimg.cc/bvzssRRV/IMG-3027.webp",
    "https://i.postimg.cc/TPChmW7d/IMG-3028.webp",
    "https://i.postimg.cc/LX55V6wz/IMG-3029.webp",
    "https://i.postimg.cc/mDnDpWWK/IMG-3030.webp",
    "https://i.postimg.cc/d3T0zNq3/IMG-3031.webp",
    "https://i.postimg.cc/F15KmbRZ/IMG-3032.webp",
    "https://i.postimg.cc/8kFBp1cJ/IMG-3033.webp",
    "https://i.postimg.cc/h4H8hHQC/IMG-3034.webp",
    "https://i.postimg.cc/qMysKj8p/IMG-3035.webp",
    "https://i.postimg.cc/13KDCXCT/IMG-3036.webp",
    "https://i.postimg.cc/sgzp47c7/IMG-3037.webp",
    "https://i.postimg.cc/N0fmWtZ0/IMG-3038.webp",
    "https://i.postimg.cc/k51KCZdv/IMG-3039.webp",
    "https://i.postimg.cc/MTnRpD62/IMG-3040.webp",
    "https://i.postimg.cc/Y0gW1CLd/IMG-3041.webp",
    "https://i.postimg.cc/J7BZwPYj/IMG-3042.webp",
    "https://i.postimg.cc/Fs5ch3w8/IMG-3043.webp",
    "https://i.postimg.cc/8PRvcsS5/IMG-3044.webp",
    "https://i.postimg.cc/vZGVVMYv/IMG-3045.webp",
    "https://i.postimg.cc/4xwhvMnR/IMG-3046.webp",
    "https://i.postimg.cc/bJSDhwgq/IMG-3047.webp",
    "https://i.postimg.cc/xd4JhzKs/IMG-3048.webp",
    "https://i.postimg.cc/VN60KRbr/IMG-3049.webp",
    "https://i.postimg.cc/5NVHh1CM/IMG-3050.webp",
    "https://i.postimg.cc/Hs9JHKw8/IMG-3051.webp",
    "https://i.postimg.cc/BZDL7ttg/IMG-3052.webp",
    "https://i.postimg.cc/5ywXXKDG/IMG-3053.webp",
    "https://i.postimg.cc/Jz7shqx6/IMG-3054.webp",
    "https://i.postimg.cc/BvkbMG0k/IMG-3055.webp",
    "https://i.postimg.cc/vmcDrZp5/IMG-3056.webp",
    "https://i.postimg.cc/XY2pBCDV/IMG-3057.webp",
    "https://i.postimg.cc/rsLm2Cz9/IMG-3058.webp",
    "https://i.postimg.cc/Y0fSrGWB/IMG-3059.webp",
    "https://i.postimg.cc/v8WTLjS2/IMG-3060.webp",
    "https://i.postimg.cc/qM4RmLPJ/IMG-3061.webp",
    "https://i.postimg.cc/28G5gWY4/IMG-3062.webp",
    "https://i.postimg.cc/Bnvv3vZR/IMG-3063.webp",
    "https://i.postimg.cc/dVSVVKL3/IMG-3064.webp",
    "https://i.postimg.cc/MGMKcrQD/IMG-3065.webp",
    "https://i.postimg.cc/q7PB2Xcd/IMG-3066.webp",
    "https://i.postimg.cc/6qw9mW1j/IMG-3067.webp",
    "https://i.postimg.cc/T19R8zzR/IMG-3068.webp",
    "https://i.postimg.cc/1RcRNFfL/IMG-3069.webp",
    "https://i.postimg.cc/sDjjP2W1/IMG-3070.webp",
    "https://i.postimg.cc/8PZ1ZVd4/IMG-3071.webp",
    "https://i.postimg.cc/MpXz4rdS/IMG-3072.webp",
    "https://i.postimg.cc/YCVtwfsm/IMG-3073.webp",
    "https://i.postimg.cc/Ls124YcQ/IMG-3074.webp",
    "https://i.postimg.cc/TY3xL48D/IMG-3075.webp",
    "https://i.postimg.cc/YqDH1zky/IMG-3076.webp",
    "https://i.postimg.cc/FFZmKQ6v/IMG-3077.webp",
    "https://i.postimg.cc/BbMG7xFb/IMG-3078.webp",
    "https://i.postimg.cc/3xyH90xr/IMG-3079.webp",
    "https://i.postimg.cc/t4LGcRs3/IMG-3080.webp",
    "https://i.postimg.cc/HLX11GMf/IMG-3081.webp",
    "https://i.postimg.cc/Ss4FyZ7j/IMG-3082.webp",
    "https://i.postimg.cc/1tKx4pJB/IMG-3083.webp",
    "https://i.postimg.cc/zvDshVQr/IMG-3084.webp",
    "https://i.postimg.cc/1XWLryxN/IMG-3085.webp",
    "https://i.postimg.cc/nV0bJGsc/IMG-3086.webp",
    "https://i.postimg.cc/4NyCNHtv/IMG-3087.webp",
    "https://i.postimg.cc/jdFpWqQp/IMG-3088.webp",
    "https://i.postimg.cc/rp67JhHg/IMG-3089.webp",
    "https://i.postimg.cc/W1qQ0R5h/IMG-3090.webp",
    "https://i.postimg.cc/7LgdQ384/IMG-3091.webp",
    "https://i.postimg.cc/76wdv5w2/IMG-3092.webp",
    "https://i.postimg.cc/V6gTzzkH/IMG-3093.webp",
    "https://i.postimg.cc/T1PswBy2/IMG-3094.webp",
    "https://i.postimg.cc/J0d2BKJN/IMG-3095.webp",
    "https://i.postimg.cc/8ky33k37/IMG-3096.webp",
    "https://i.postimg.cc/hPfwqWWp/IMG-3097.webp",
    "https://i.postimg.cc/vHkKYqGM/IMG-3098.webp",
    "https://i.postimg.cc/Qd7yHQM7/IMG-3099.webp",
    "https://i.postimg.cc/DzKYsSWM/IMG-3100.webp",
    "https://i.postimg.cc/MGb3YzVK/IMG-3101.webp",
    "https://i.postimg.cc/wvqffnQ5/IMG-3102.webp",
    "https://i.postimg.cc/rmfhvgfB/IMG-3103.webp",
    "https://i.postimg.cc/gjrMdR5n/IMG-3104.webp",
    "https://i.postimg.cc/wxbf2fyJ/IMG-3105.webp",
    "https://i.postimg.cc/rsbfpsXg/IMG-3106.webp",
    "https://i.postimg.cc/vHgPNrfK/IMG-3107.webp",
    "https://i.postimg.cc/28sHR1xS/IMG-3108.webp",
    "https://i.postimg.cc/XY9sVn2c/IMG-3109.webp",
    "https://i.postimg.cc/25m2ygMp/IMG-3110.webp",
    "https://i.postimg.cc/3wB9vnQk/IMG-3111.webp",
    "https://i.postimg.cc/vBZhLfG3/IMG-3112.webp",
    "https://i.postimg.cc/j53X825K/IMG-3113.webp",
    "https://i.postimg.cc/6q7hFK2Z/IMG-3114.webp",
    "https://i.postimg.cc/90vBhkZn/IMG-3115.webp",
    "https://i.postimg.cc/PfcyYC9Q/IMG-3116.webp",
    "https://i.postimg.cc/131K7L9g/IMG-3117.webp",
    "https://i.postimg.cc/L61TTHMK/IMG-3118.webp",
    "https://i.postimg.cc/2Sd7s260/IMG-3119.webp",
    "https://i.postimg.cc/3wKFYm0Y/IMG-3120.webp",
    "https://i.postimg.cc/wB0cvMDJ/IMG-3121.webp",
    "https://i.postimg.cc/wvM5szkr/IMG-3122.webp",
    "https://i.postimg.cc/90qGJBKt/IMG-3123.webp",
    "https://i.postimg.cc/dDPGXyKM/IMG-3124.webp",
    "https://i.postimg.cc/pV97wMtk/IMG-3125.webp",
    "https://i.postimg.cc/mZ0qRpL4/IMG-3126.webp",
    "https://i.postimg.cc/MKVLG0HQ/IMG-3127.webp",
    "https://i.postimg.cc/htn5QJQ3/IMG-3128.webp",
    "https://i.postimg.cc/7LYtXpV3/IMG-3129.webp",
    "https://i.postimg.cc/s266Lw6t/IMG-3130.webp",
    "https://i.postimg.cc/8zbnR1hk/IMG-3131.webp",
    "https://i.postimg.cc/NMKJvmZL/IMG-3132.webp",
    "https://i.postimg.cc/0Qhtkrqn/IMG-3133.webp",
    "https://i.postimg.cc/j2NMLKxb/IMG-3134.webp",
    "https://i.postimg.cc/XNyH2Kwz/IMG-3135.webp",
    "https://i.postimg.cc/9F5xs4bF/IMG-3136.webp",
    "https://i.postimg.cc/5NBPJxK5/IMG-3137.webp",
    "https://i.postimg.cc/8zTZPqx2/IMG-3138.webp",
    "https://i.postimg.cc/vZX310sc/IMG-3139.webp",
    "https://i.postimg.cc/HLx3bbY3/IMG-3140.webp",
    "https://i.postimg.cc/7LW99bb4/IMG-3141.webp",
    "https://i.postimg.cc/G2TQ5rsy/IMG-3142.webp",
    "https://i.postimg.cc/yxqPq5Fr/IMG-3143.webp",
    "https://i.postimg.cc/fyxvMKCW/IMG-3144.webp",
    "https://i.postimg.cc/RCfd1Smr/IMG-3145.webp",
    "https://i.postimg.cc/SNhrDBQn/IMG-3146.webp",
    "https://i.postimg.cc/SNfG5gjD/IMG-3147.webp",
    "https://i.postimg.cc/cL1cNfnZ/IMG-3148.webp",
    "https://i.postimg.cc/htC14hLm/IMG-3149.webp",
    "https://i.postimg.cc/MGvbnx5F/IMG-3150.webp",
    "https://i.postimg.cc/hG68xw3P/IMG-3151.webp",
    "https://i.postimg.cc/KzTP5Nd7/IMG-3152.webp",
    "https://i.postimg.cc/x8SKpm2w/IMG-3153.webp",
    "https://i.postimg.cc/prYKwdVp/IMG-3154.webp",
    "https://i.postimg.cc/gcvyXgym/IMG-3155.webp",
    "https://i.postimg.cc/02PYp7Zm/IMG-3156.webp",
    "https://i.postimg.cc/RVdcGqbY/IMG-3157.webp",
    "https://i.postimg.cc/K8stSwbr/IMG-3158.webp",
    "https://i.postimg.cc/QM91XmxL/IMG-3159.webp",
    "https://i.postimg.cc/jjpNCfLD/IMG-3160.webp",
    "https://i.postimg.cc/qR2KK73j/IMG-3161.webp",
    "https://i.postimg.cc/Xq3Ck0K3/IMG-3162.webp",
    "https://i.postimg.cc/hvr7C3Mm/IMG-3163.webp",
    "https://i.postimg.cc/nVY7cCZL/IMG-3164.webp",
    "https://i.postimg.cc/Qx87BhxJ/IMG-3165.webp",
    "https://i.postimg.cc/Wb5kgCdL/IMG-3166.webp",
    "https://i.postimg.cc/7ZcJQz1K/IMG-3167.webp",
    "https://i.postimg.cc/zG3Rj7hL/IMG-3168.webp",
    "https://i.postimg.cc/rprR6pQM/IMG-3169.webp",
    "https://i.postimg.cc/V6PrzcVM/IMG-3170.webp",
    "https://i.postimg.cc/ZRP9RDGQ/IMG-3171.webp",
    "https://i.postimg.cc/1X98NrP3/IMG-3172.webp",
    "https://i.postimg.cc/kGfBNRXF/IMG-3173.webp",
    "https://i.postimg.cc/ryJ023C0/IMG-3174.webp",
    "https://i.postimg.cc/dtV7s64W/IMG-3175.webp",
    "https://i.postimg.cc/5NKX6zrf/IMG-3176.webp",
    "https://i.postimg.cc/VkSdM6yn/IMG-3177.webp",
    "https://i.postimg.cc/Jz9tQLmg/IMG-3178.webp",
    "https://i.postimg.cc/k5KG1pg5/IMG-3179.webp",
    "https://i.postimg.cc/C101WsRs/IMG-3180.webp",
    "https://i.postimg.cc/Kz5zF3LS/IMG-3181.webp",
    "https://i.postimg.cc/gjk00cqw/IMG-3182.webp",
    "https://i.postimg.cc/VvGk0yDK/IMG-3183.webp",
    "https://i.postimg.cc/c4CHyHL2/IMG-3184.webp",
    "https://i.postimg.cc/Y2b9sgMQ/IMG-3185.webp",
    "https://i.postimg.cc/MKLGWScT/IMG-3186.webp",
    "https://i.postimg.cc/T3W314mc/IMG-3187.webp",
    "https://i.postimg.cc/XvS7Ckk6/IMG-3188.webp",
    "https://i.postimg.cc/Y9trX2PX/IMG-3189.webp",
    "https://i.postimg.cc/6Qr6L4M2/IMG-3190.webp",
    "https://i.postimg.cc/j5vsB00R/IMG-3191.webp",
    "https://i.postimg.cc/zvBJrt8K/IMG-3192.webp",
    "https://i.postimg.cc/8c0TPRz3/IMG-3193.webp",
    "https://i.postimg.cc/XNHj8bk8/IMG-3194.webp",
    "https://i.postimg.cc/FsY9CBPQ/IMG-3195.webp",
    "https://i.postimg.cc/dtgJbjXZ/IMG-3196.webp",
    "https://i.postimg.cc/YCgtMmKn/IMG-3197.webp",
    "https://i.postimg.cc/JhLMn4R1/IMG-3198.webp",
    "https://i.postimg.cc/Xvk3ySv9/IMG-3199.webp",
    "https://i.postimg.cc/k4MCQ1Vz/IMG-3200.webp",
    "https://i.postimg.cc/Qt630Q1t/IMG-3201.webp",
    "https://i.postimg.cc/brsjMZ9R/IMG-3202.webp",
    "https://i.postimg.cc/BbkGGJhf/IMG-3203.webp",
    "https://i.postimg.cc/59RJzmfK/IMG-3204.webp",
    "https://i.postimg.cc/Fsk4VJRr/IMG-3205.webp",
    "https://i.postimg.cc/2Spfc8b4/IMG-3206.webp",
    "https://i.postimg.cc/wjhYS8Ln/IMG-3207.webp",
    "https://i.postimg.cc/GpdnR7jt/IMG-3208.webp",
    "https://i.postimg.cc/25GRSQHw/IMG-3209.webp",
    "https://i.postimg.cc/0QNgMzFq/IMG-3210.webp",
    "https://i.postimg.cc/G2gWkcnT/IMG-3211.webp",
    "https://i.postimg.cc/kGkLpf4n/IMG-3212.webp",
    "https://i.postimg.cc/CMXy5L4W/IMG-3213.webp",
    "https://i.postimg.cc/jd7p70gC/IMG-3214.webp",
    "https://i.postimg.cc/6pxDVjgc/IMG-3215.webp",
    "https://i.postimg.cc/YCNTdNwH/IMG-3216.webp",
    "https://i.postimg.cc/wB6ZZt6s/IMG-3217.webp",
    "https://i.postimg.cc/rpQ3k8mZ/IMG-3218.webp",
    "https://i.postimg.cc/gJj5cfLz/IMG-3219.webp",
    "https://i.postimg.cc/1tdd8JDp/IMG-3220.webp",
    "https://i.postimg.cc/4yhSVV1j/IMG-3221.webp",
    "https://i.postimg.cc/jC0kX2g2/IMG-3222.webp",
    "https://i.postimg.cc/J7DrPFYC/IMG-3223.webp",
    "https://i.postimg.cc/VsxYTF2r/IMG-3224.webp",
    "https://i.postimg.cc/15D9ZqZW/IMG-3225.webp",
    "https://i.postimg.cc/K8Fmc8Gm/IMG-3226.webp",
    "https://i.postimg.cc/zGj8yYvK/IMG-3227.webp",
    "https://i.postimg.cc/XvY3F1Bh/IMG-3228.webp",
];

// ... (seus links de photoLinks aqui, não reescritos) ...

const gallery = document.getElementById("gallery");
const selectedCount = document.getElementById("selectedCount");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const chooseButton = document.getElementById("chooseButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const backToTop = document.getElementById("backToTop");
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
let selectedPhotos = [];
let currentPhotoIndex = null;
let isZoomed = false;
let startX = 0;
let isDragging = false;

// Função para extrair o identificador do link
function getPhotoId(link) {
    const parts = link.split("/");
    const filename = parts[parts.length - 1];
    return filename.replace(".webp", "");
}

photoLinks.forEach((link, index) => {
    const photoId = getPhotoId(link);
    const container = document.createElement("div");
    container.classList.add("photo-container");
    container.dataset.id = photoId;
    container.dataset.index = index;

    const img = document.createElement("img");
    img.src = link;
    img.alt = photoId;
    img.classList.add("photo");

    const checkmark = document.createElement("div");
    checkmark.textContent = "✔";
    checkmark.classList.add("checkmark");

    const label = document.createElement("span");
    label.textContent = photoId;
    label.classList.add("photo-label");

    container.appendChild(img);
    container.appendChild(checkmark);
    container.appendChild(label);

    container.addEventListener("click", () => {
        currentPhotoIndex = index;
        openModal(link, photoId);
    });

    gallery.appendChild(container);
});

function openModal(link, photoId) {
    modal.style.display = "flex";
    modalImage.src = link;
    chooseButton.dataset.id = photoId;
    chooseButton.textContent = selectedPhotos.includes(photoId) ? "Desmarcar" : "Escolher";
    updateNavButtons();
    isZoomed = false;
    modalImage.classList.remove("zoomed");
}

function updateNavButtons() {
    prevButton.style.display = currentPhotoIndex > 0 ? "block" : "none";
    nextButton.style.display = currentPhotoIndex < photoLinks.length - 1 ? "block" : "none";
}

chooseButton.addEventListener("click", () => {
    const photoId = chooseButton.dataset.id;
    const container = document.querySelector(`.photo-container[data-id="${photoId}"]`);
    
    if (selectedPhotos.includes(photoId)) {
        selectedPhotos = selectedPhotos.filter(id => id !== photoId);
        container.classList.remove("selected");
        chooseButton.textContent = "Escolher";
    } else {
        selectedPhotos.push(photoId);
        container.classList.add("selected");
        chooseButton.textContent = "Desmarcar";
    }
    updateSelectedCount();
});

prevButton.addEventListener("click", () => {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        const link = photoLinks[currentPhotoIndex];
        const photoId = getPhotoId(link);
        openModal(link, photoId);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPhotoIndex < photoLinks.length - 1) {
        currentPhotoIndex++;
        const link = photoLinks[currentPhotoIndex];
        const photoId = getPhotoId(link);
        openModal(link, photoId);
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Navegação por teclado
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft" && currentPhotoIndex > 0) {
            currentPhotoIndex--;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        } else if (e.key === "ArrowRight" && currentPhotoIndex < photoLinks.length - 1) {
            currentPhotoIndex++;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        } else if (e.key === "Escape") {
            modal.style.display = "none";
        }
    }
});

// Voltar ao topo
window.addEventListener("scroll", () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    backToTop.style.display = scrollPercent > 10 ? "flex" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Zoom com duplo clique
modalImage.addEventListener("dblclick", () => {
    if (isZoomed) {
        modalImage.classList.remove("zoomed");
    } else {
        modalImage.classList.add("zoomed");
    }
    isZoomed = !isZoomed;
});

// Zoom com roda do mouse
modalImage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    if (delta > 0) {
        modalImage.classList.remove("zoomed");
        isZoomed = false;
    } else {
        modalImage.classList.add("zoomed");
        isZoomed = true;
    }
});

// Navegação por deslize
modalImage.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

modalImage.addEventListener("mousemove", (e) => {
    if (isDragging) {
        e.preventDefault();
    }
});

modalImage.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0 && currentPhotoIndex < photoLinks.length - 1) {
            currentPhotoIndex++;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        } else if (diff < 0 && currentPhotoIndex > 0) {
            currentPhotoIndex--;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        }
    }
});

// Suporte para toque (dispositivos móveis)
modalImage.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

modalImage.addEventListener("touchmove", (e) => {
    if (isDragging) {
        e.preventDefault();
    }
});

modalImage.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0 && currentPhotoIndex < photoLinks.length - 1) {
            currentPhotoIndex++;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        } else if (diff < 0 && currentPhotoIndex > 0) {
            currentPhotoIndex--;
            const link = photoLinks[currentPhotoIndex];
            const photoId = getPhotoId(link);
            openModal(link, photoId);
        }
    }
});

// Controle do menu lateral
toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
});

// Exibir nome do usuário na página do álbum
if (document.getElementById("usernameDisplay")) {
    const username = window.location.pathname.split("album-")[1].replace(".html", "");
    document.getElementById("usernameDisplay").textContent = username;
}

function updateSelectedCount() {
    selectedCount.textContent = `${selectedPhotos.length} fotos selecionadas`;
}

function sendToWhatsApp() {
    if (selectedPhotos.length === 0) {
        alert("Por favor, selecione pelo menos uma foto!");
        return;
    }

    const message = `Olá! Escolhi as fotos: ${selectedPhotos.join(", ")}.`;
    const phoneNumber = "5519995466902";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
