import React, { useEffect, useRef, useState } from 'react';

interface ShopifyBuyButtonProps {
  productId: string;
  domain: string;
  accessToken: string;
  buttonText?: string;
  className?: string;
}

export const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({
  productId,
  domain,
  accessToken,
  buttonText = 'Add to cart',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const scriptId = 'shopify-buy-button-script';

    const loadScriptAndInit = () => {
      const win = window as any;
      if (win.ShopifyBuy && win.ShopifyBuy.UI) {
        initComponent();
      } else {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          existingScript.addEventListener('load', () => {
            if (active) initComponent();
          });
        } else {
          const script = document.createElement('script');
          script.id = scriptId;
          script.async = true;
          script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          document.head.appendChild(script);
          script.onload = () => {
            if (active) initComponent();
          };
          script.onerror = () => {
            if (active) setError('Failed to load purchase buttons. Please check your connection.');
          };
        }
      }
    };

    const initComponent = () => {
      if (!containerRef.current) return;
      
      // Clear container first to prevent duplicates
      containerRef.current.innerHTML = '';

      try {
        const win = window as any;
        const client = win.ShopifyBuy.buildClient({
          domain: domain,
          storefrontAccessToken: accessToken,
        });

        win.ShopifyBuy.UI.onReady(client).then((ui: any) => {
          if (!active) return;
          ui.createComponent('product', {
            id: productId,
            node: containerRef.current,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    width: '100%',
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px',
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0px',
                      'margin-bottom': '0px',
                    },
                  },
                  button: {
                    'font-family': 'Inter, sans-serif',
                    'font-size': '16px',
                    'font-weight': '600',
                    'padding-top': '14px',
                    'padding-bottom': '14px',
                    'padding-left': '28px',
                    'padding-right': '28px',
                    'background-color': '#06b6d4', // Cyan accent
                    ':hover': {
                      'background-color': '#0891b2', // Darker cyan hover
                    },
                    ':focus': {
                      'background-color': '#0891b2',
                    },
                    'border-radius': '9999px', // Rounded pill
                    'transition': 'all 0.2s ease-in-out',
                    'box-shadow': '0 4px 14px 0 rgba(6, 182, 212, 0.3)',
                  },
                  quantityInput: {
                    'border-radius': '9999px',
                    'border-color': '#374151',
                    'color': '#f3f4f6',
                    'background-color': '#1f2937',
                  },
                },
                text: {
                  button: buttonText,
                },
                contents: {
                  img: false,
                  title: false,
                  price: false,
                },
              },
              cart: {
                styles: {
                  button: {
                    'background-color': '#06b6d4',
                    ':hover': {
                      'background-color': '#0891b2',
                    },
                    'border-radius': '8px',
                  },
                  footer: {
                    'background-color': '#111827',
                  },
                },
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    'background-color': '#06b6d4',
                    ':hover': {
                      'background-color': '#0891b2',
                    },
                  },
                },
              },
            },
          });
          setIsLoaded(true);
        }).catch((err: any) => {
          console.error('ShopifyBuy component initialization failed:', err);
          if (active) setError('Initialization of Checkout buttons failed.');
        });
      } catch (err) {
        console.error('Error creating ShopifyBuy client or component:', err);
        if (active) setError('Could not initialize purchase system.');
      }
    };

    loadScriptAndInit();

    return () => {
      active = false;
    };
  }, [productId, domain, accessToken, buttonText]);

  return (
    <div className={`relative ${className}`}>
      {error && (
        <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-lg text-red-200 text-sm text-center mb-4">
          {error}
        </div>
      )}
      {!isLoaded && !error && (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent border-cyan-500 mb-2"></div>
          <span className="text-gray-400 text-xs">Loading secure order buttons...</span>
        </div>
      )}
      <div ref={containerRef} id={`shopify-product-${productId}`} className="w-full flex justify-center" />
    </div>
  );
};
