const LifeInsuranceIcon = ({ color = "#A3A2A2", size = "20" }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3497 13.3067C15.3086 13.2828 15.2663 13.2582 15.2221 13.2334C15.2326 13.2244 15.2422 13.2161 15.251 13.2085C15.2808 13.1826 15.3021 13.1642 15.323 13.1483C15.8267 12.7439 16.1095 12.218 16.1772 11.5785C16.1851 11.4784 16.2313 11.3852 16.3062 11.3183C17.6409 10.0227 18.2616 8.45065 18.0875 6.59198C17.9727 5.36179 17.4519 4.30959 16.5594 3.45926C14.8297 1.81212 12.3593 1.54803 10.3152 2.78209C10.1233 2.89753 9.99274 2.89334 9.79926 2.78048C8.12343 1.80181 6.39825 1.72216 4.68663 2.64375C3.03369 3.53246 2.12886 4.96774 2.01213 6.83576C1.90184 8.6035 2.54677 10.1055 3.8263 11.3341C3.88422 11.3924 3.92187 11.4678 3.93368 11.5492C4.0072 12.1877 4.27613 12.7181 4.77659 13.1273C4.80233 13.1484 4.82694 13.171 4.85405 13.1959C4.86803 13.2087 4.88268 13.2222 4.89848 13.2363C4.88335 13.2457 4.8709 13.2537 4.86001 13.2607C4.84235 13.2721 4.8288 13.2808 4.81464 13.2882C3.59703 13.9148 2.97564 14.9144 2.96597 16.2816C2.95927 17.2081 2.96092 18.1346 2.96257 19.061C2.9633 19.4728 2.96403 19.8845 2.96403 20.2963C2.96403 20.6146 3.07045 20.721 3.38936 20.721H7.13379C7.14231 20.7365 7.14891 20.7529 7.15346 20.77C7.15497 21.0441 7.15636 21.3181 7.15765 21.5919C7.15894 21.9022 7.266 22.0111 7.57298 22.0111H12.5553C12.8536 22.0111 12.9665 21.8996 12.9665 21.6042V20.7336C12.9816 20.7319 12.9946 20.7302 13.0061 20.7286C13.028 20.7258 13.0447 20.7236 13.0616 20.7236C13.8516 20.7216 14.6417 20.7207 15.4317 20.7236C15.4898 20.7262 15.5463 20.7433 15.5962 20.7732C16.2557 21.1552 16.914 21.5405 17.5709 21.9289C17.7325 22.0257 17.8769 22.0257 18.0382 21.9289C18.2918 21.7785 18.5471 21.6307 18.8024 21.4829C19.1608 21.2754 19.5193 21.0679 19.8733 20.8532C21.2621 20.0109 21.9732 18.7723 21.9954 17.1471C22.0005 16.7765 21.9994 16.4059 21.9983 16.0353C21.9973 15.6965 21.9962 15.3577 21.9999 15.0189C22.0025 14.8109 21.9235 14.6813 21.7445 14.5778C20.5155 13.8681 19.2902 13.1532 18.0685 12.4331C17.8785 12.3215 17.7202 12.3189 17.5309 12.4331C16.9978 12.7545 16.458 13.065 15.9185 13.3755C15.8853 13.3945 15.8521 13.4136 15.819 13.4327C15.77 13.4607 15.6923 13.4859 15.6481 13.4665C15.5477 13.4219 15.4523 13.3664 15.3497 13.3067ZM16.174 10.5312C16.1438 10.5622 16.1115 10.591 16.0773 10.6176C15.6152 9.57798 14.8377 9.02367 13.7004 9.12427C12.7817 9.20586 12.12 9.71986 11.8127 10.5924C11.4399 11.6501 11.7727 12.5272 12.6253 13.2286C12.4068 13.3679 12.1893 13.5063 11.9624 13.6506C11.9037 13.6879 11.8444 13.7256 11.7843 13.7639C11.3322 13.2692 10.7596 12.9774 10.0582 12.979C9.36233 12.9803 8.79221 13.2657 8.34077 13.7655L7.49172 13.2244C8.18598 12.6891 8.53295 11.9832 8.43621 11.0994C8.36592 10.4477 8.05248 9.91689 7.51752 9.53477C6.90549 9.09719 6.22864 8.98658 5.51052 9.21231C4.79981 9.43577 4.32773 9.92333 4.00526 10.6405C3.98101 10.5925 3.95286 10.5465 3.9211 10.5031C3.02337 9.46415 2.5932 8.25588 2.65383 6.88445C2.74895 4.72525 4.49573 2.90269 6.64849 2.69019C7.66327 2.59023 8.60099 2.81047 9.47164 3.33189C9.50651 3.35279 9.54171 3.37322 9.57691 3.39365C9.65791 3.44067 9.73893 3.4877 9.81603 3.54052C9.98371 3.65661 10.1414 3.64758 10.3104 3.54052C10.7192 3.28191 11.1384 3.04457 11.6021 2.89108C14.1854 2.03624 16.9505 3.68111 17.3994 6.36368C17.6635 7.94148 17.2091 9.32614 16.174 10.5312ZM21.347 16.3336L21.3792 16.3358C21.3679 16.5 21.3612 16.665 21.3545 16.8301C21.3398 17.1917 21.3251 17.5535 21.2618 17.9069C21.0793 18.9142 20.5163 19.6897 19.6456 20.2286C19.2981 20.4436 18.944 20.6482 18.5899 20.8528C18.3674 20.9814 18.1449 21.11 17.924 21.2411C17.8318 21.2959 17.7641 21.2898 17.6748 21.2369C17.4682 21.1151 17.2604 20.9951 17.0525 20.8751C16.7069 20.6756 16.3612 20.476 16.0212 20.2676C14.8842 19.5695 14.2941 18.5473 14.2596 17.2155C14.2487 16.7951 14.2509 16.3741 14.2531 15.9532C14.2543 15.7132 14.2556 15.4732 14.2544 15.2333C14.2541 15.1427 14.2776 15.0876 14.3602 15.0398C15.4621 14.402 16.5613 13.7606 17.6577 13.1157C17.766 13.0528 17.845 13.0557 17.9501 13.1173C19.0377 13.7571 20.1278 14.3931 21.2205 15.0253C21.3173 15.0814 21.3515 15.144 21.3495 15.254C21.3446 15.5143 21.3455 15.7746 21.3463 16.0349C21.3466 16.1345 21.347 16.234 21.347 16.3336ZM8.79544 17.1278C7.64102 17.7608 7.10154 18.7417 7.15572 20.0657H3.62153C3.62074 20.0464 3.61966 20.0275 3.6186 20.0089C3.61665 19.9748 3.61476 19.9416 3.61476 19.9084C3.61442 19.6447 3.61394 19.381 3.61346 19.1173C3.6117 18.1505 3.60995 17.1837 3.61476 16.2171C3.62186 14.728 4.81851 13.5746 6.30377 13.6316C6.88994 13.6509 7.45009 13.8783 7.88384 14.273C7.92447 14.3088 7.95865 14.4007 7.94124 14.4459C7.56041 15.4426 7.97735 16.5557 8.75674 17.0797C8.77159 17.0941 8.78459 17.1102 8.79544 17.1278ZM12.3141 21.2998C12.3113 21.318 12.3062 21.3358 12.299 21.3527L7.80677 21.3536V21.0957C7.80677 20.947 7.8062 20.7984 7.80562 20.6497C7.80448 20.3526 7.80333 20.0555 7.80677 19.7584C7.82257 18.4437 8.88089 17.4415 10.1872 17.5012C11.3 17.5518 12.249 18.4747 12.3054 19.5924C12.3258 19.9949 12.3217 20.3988 12.3175 20.8026C12.3158 20.9684 12.3141 21.1341 12.3141 21.2998ZM14.9745 13.8655C14.99 13.8749 15.0071 13.8853 15.027 13.8967C14.9559 13.9385 14.8858 13.9797 14.8165 14.0205C14.5835 14.1576 14.3592 14.2896 14.1325 14.4201C13.8284 14.5964 13.6975 14.6589 13.642 14.7619C13.5875 14.8631 13.6058 15.0035 13.6043 15.3294C13.6043 15.5283 13.6047 15.7271 13.6052 15.926C13.606 16.3237 13.6069 16.7214 13.6043 17.1191C13.5972 18.2008 13.9459 19.1522 14.6504 19.9732C14.6632 19.9892 14.6748 20.005 14.6896 20.0253C14.6975 20.0361 14.7064 20.0482 14.7168 20.0622H12.9665C13.0187 18.7501 12.4854 17.764 11.3181 17.1252C11.3334 17.1123 11.3475 17.1003 11.3609 17.0888C11.3881 17.0656 11.4122 17.045 11.437 17.0256C12.2203 16.4106 12.5125 15.4261 12.1861 14.4823C12.1558 14.3946 12.1565 14.3385 12.229 14.2711C12.9142 13.6358 14.0461 13.4437 14.898 13.8235C14.9231 13.8342 14.9461 13.8482 14.9745 13.8655ZM7.32552 10.2304C7.62759 10.5315 7.79828 10.9398 7.80032 11.3664C7.80064 12.2509 7.07478 12.9787 6.19317 12.9783C5.98064 12.9777 5.77032 12.9352 5.57423 12.8532C5.37815 12.7712 5.20014 12.6514 5.0504 12.5006C4.90066 12.3498 4.78211 12.1709 4.70155 11.9742C4.62098 11.7776 4.57997 11.567 4.58086 11.3544C4.58312 10.4818 5.31156 9.7592 6.18801 9.7592C6.61452 9.75988 7.02344 9.92926 7.32552 10.2304ZM13.9477 9.75823C14.8223 9.76597 15.5436 10.4963 15.5394 11.3705L15.5404 11.3693C15.5391 11.5819 15.4959 11.7921 15.4133 11.988C15.3307 12.1839 15.2102 12.3616 15.0589 12.511C14.9076 12.6603 14.7283 12.7784 14.5314 12.8584C14.3344 12.9384 14.1236 12.9789 13.911 12.9774C13.0297 12.9719 12.3135 12.238 12.3203 11.3496C12.3267 10.4677 13.0603 9.75114 13.9477 9.75823ZM10.674 16.724C10.4778 16.8057 10.2675 16.8479 10.055 16.8482C9.17401 16.8482 8.44911 16.1169 8.45105 15.2333C8.45394 14.8069 8.62535 14.3989 8.92788 14.0984C9.23041 13.7978 9.63951 13.6291 10.0659 13.6291C10.9424 13.6304 11.6705 14.3546 11.6705 15.2275C11.6708 15.44 11.6293 15.6505 11.5483 15.8469C11.4673 16.0434 11.3484 16.222 11.1984 16.3724C11.0484 16.5229 10.8702 16.6424 10.674 16.724ZM18.3371 16.1762C17.9501 16.5638 17.5632 16.953 17.1575 17.3642C17.0777 17.2833 17.0001 17.2043 16.924 17.1268C16.7661 16.9661 16.6142 16.8114 16.4604 16.6583C16.2701 16.4716 16.1053 16.4738 15.9154 16.6618C15.6217 16.9529 15.3293 17.2454 15.038 17.5393C14.8442 17.735 14.8445 17.8978 15.0415 18.0955C15.6521 18.7075 16.2636 19.3188 16.876 19.9293C17.0734 20.1257 17.2391 20.1283 17.4326 19.9348C18.5842 18.786 19.735 17.6359 20.8849 16.4845C21.0816 16.2878 21.0816 16.1233 20.8881 15.9276C20.6009 15.6374 20.3122 15.3488 20.022 15.0618C19.8159 14.858 19.6576 14.8577 19.4541 15.0598C19.0809 15.4309 18.7086 15.803 18.3371 16.1762ZM20.1854 16.2081L17.1475 19.2393L15.7206 17.8201C15.8732 17.6689 16.0325 17.5118 16.2111 17.3364C16.2381 17.3632 16.2682 17.3928 16.3001 17.4241C16.3477 17.4708 16.3992 17.5215 16.4504 17.5725C16.5006 17.6227 16.5507 17.673 16.6008 17.7233C16.6909 17.8138 16.781 17.9043 16.8718 17.9942C17.0756 18.1961 17.2359 18.1977 17.4403 17.9942C18.1553 17.281 18.8694 16.5667 19.5824 15.8515C19.6216 15.8062 19.657 15.7578 19.6882 15.7067C19.8765 15.897 20.0368 16.0585 20.1854 16.2081Z"
          fill={color}
        />
      </svg>
    );
  };
  
  export default LifeInsuranceIcon;

  