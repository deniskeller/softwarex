import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import s from './LogoAnimated.module.scss';

interface Props {
  className?: string;
}

const TAIL_LENGHT = 370;

const LogoAnimated: React.FC<Props> = ({ className }) => {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: 'top 50%',
        onEnter: () => startAnimation(),
      },
    });

    const startAnimation = () => {
      const boxElement = box.current;
      if (!boxElement) {
        return;
      }
      const myPath = boxElement.querySelector('path') as SVGPathElement;
      const length = myPath?.getTotalLength();

      gsap.set(boxElement.querySelector('path'), {
        'stroke-dasharray': `0,${length},${0},${length}`,
        'stroke-dashoffset': 1,
      });

      gsap.set(boxElement.querySelector('.start'), {
        'stop-color': '#F98973',
      });
      gsap.set(boxElement.querySelector('.stop'), {
        'stop-color': '#F98973',
      });
      gsap.set(boxElement, {
        opacity: 1,
      });
      (async () => {
        gsap.to(boxElement.querySelector('path'), 2, {
          'stroke-dasharray': `0,${0},${length - TAIL_LENGHT},${length}`,
        });
        gsap.to(boxElement.querySelector('.start'), 2, {
          'stop-color': '#FB8873',
        });
        gsap.to(boxElement.querySelector('.stop'), 2, {
          'stop-color': '#6E6CCF',
        });
      })();
    };
  }, []);

  return (
    <div
      ref={box}
      style={{ opacity: 0 }}
      className={`${s.LogoAnimated} ${className}`}
    >
      <svg viewBox="0 0 445 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M257.986 120.503L270.963 111.418L282.846 103.273L250.325 77.8974C248.136 75.2346 246.885 71.7885 246.885 68.0292C246.885 59.2574 254.077 52.052 262.833 52.052C266.117 52.052 269.244 52.9919 271.745 54.7149L283.159 63.4867L294.886 72.5717L306.456 81.3435L318.964 91.0551C323.186 93.8746 326 98.7304 326 104.213C326 109.069 323.811 113.298 320.528 116.274L306.299 126.142L291.446 136.324L278.156 145.409L266.586 153.397C262.833 155.59 258.455 157 253.764 157C248.761 157 244.227 155.59 240.318 153.084C235.158 149.795 231.25 144.626 229.53 138.36L227.497 124.106L225.308 109.695L222.337 89.802L219.523 70.5354C217.96 64.8964 214.52 59.884 209.829 56.5945C205.764 53.6184 200.761 51.8954 195.288 51.8954C190.598 51.8954 186.22 53.1485 182.467 55.4981L169.333 64.4265L155.418 74.1381L142.441 83.2231L128.681 92.6215C125.242 95.5976 123.209 99.8268 123.209 104.683C123.209 110.165 126.023 115.021 130.245 117.84L140.877 126.142L152.604 135.071L165.112 144.626L177.464 154.18C179.965 155.904 183.093 156.843 186.376 156.843C190.754 156.843 194.663 155.12 197.633 152.144C200.448 149.325 202.324 145.252 202.324 140.866C202.324 137.107 201.073 133.817 198.884 130.998L182.78 118.467L166.363 105.622L178.871 97.0073L191.223 88.3922C188.529 90.2387 185.622 91.2644 182.787 91.2644C179.951 91.2644 177.257 90.6962 175.273 89.844C172.012 88.5657 169.318 87.0034 167.191 85.299C164.072 82.7424 161.946 79.9017 160.528 76.6349C158.685 72.8 158.118 68.397 157.976 63.7099C157.834 59.1648 158.401 54.1937 159.11 49.3645C159.819 44.6775 160.528 39.8483 161.095 35.3033C161.662 31.1843 161.804 27.2074 161.52 23.5145C161.095 19.1115 159.961 15.1345 157.267 11.8678C155.424 9.45321 152.73 7.46473 149.044 6.0444C144.366 4.19797 139.545 4.90817 134.867 7.32273C130.897 9.45323 126.927 12.862 122.958 17.123C119.98 20.5318 116.861 24.2247 113.884 28.3436C110.907 32.3206 108.071 36.5816 105.236 40.8426C102.542 44.9615 99.8483 49.2225 97.1546 53.3415C94.4609 57.6025 91.9089 61.5794 89.357 65.2723C86.3797 69.6753 83.4024 73.5102 80.7087 76.4929C75.8883 81.7481 71.4933 84.5888 67.6654 83.1685C64.6881 82.0322 62.845 78.9075 61.7108 74.6465C60.5766 70.3855 60.0095 65.1303 59.5842 59.733C59.1589 55.0459 58.8753 50.3588 58.3082 46.3819C57.4576 40.5585 56.0398 36.0135 52.779 35.0192C50.5106 34.3091 47.8169 35.4453 44.6978 38.0019C42.5712 39.7063 40.3028 42.2629 37.8926 45.2456C35.6242 48.0863 33.214 51.4951 30.6621 55.33C28.9608 57.8866 27.2587 60.5852 25.5574 63.5679C23.9978 66.4085 22.1548 69.3913 20.4535 72.516C18.7522 75.3567 17.1926 78.3393 15.4913 81.4641C13.6483 84.7308 11.9469 88.1396 10.1039 91.5484C8.40353 94.8134 6.70323 98.2202 5.00289 101.627L5 101.633"
          stroke="url(#paint0_linear_5_71)"
          strokeWidth="14"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5_71"
            x1="320.5"
            y1="91.5"
            x2="124"
            y2="98.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop className="start" stopColor="#6E6CCF" />
            <stop className="stop " offset="1" stopColor="#FB8873" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LogoAnimated;
