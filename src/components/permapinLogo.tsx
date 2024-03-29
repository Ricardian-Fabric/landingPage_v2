import React from "react";
import { gsap } from "gsap";

export function permapinAnim() {
  gsap.set(".permapin_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g5o2", { opacity: 0 });
  gsap.set("#g5mm8", { transformOrigin: "50% 50%" });

  //REPEATED
  gsap.to("#g5", { y: -30, duration: 2, ...repeatedSine, delay: -4 });

  const g5 = gsap
    .timeline({
      defaults: { duration: 1.5, ease: "none" },
      paused: false,
      repeat: -1,
      yoyo: true,
    })
    .to(
      "#g5mm4 > *",
      { scaleY: 3.2, transformOrigin: "50% 0%", duration: 1.5 },
      "<"
    )
    .to("#g5mm5", { y: 615, duration: 1.5 }, "<")
    // .to("#g5mm6", { y: 300, duration: 1.5 }, "<")
    .to("#g5mm8", { scaleY: 0.1, duration: 1.5 }, "<")
    .to("#g5mm9", { y: 175, duration: 1.1 }, "<+.1")
    .to("#g5m1, #g5o2", { y: 115, duration: 0.45 }, ">+.3")
    .to("#g5mm5", { y: 730, duration: 0.45 }, "<")
    .to("#g5mm4 > *", { scaleY: 3.6, duration: 0.45 }, "<")
    .to("#g5o2", { opacity: 1, duration: 0.45 }, "<")
    .to("#g5mm9", { y: 225, duration: 0.45 }, "<");
}

export default function PermapinLogo() {
  const permapin_animation_container = {
    display: "flex",
    position: "relative",
    height: "80px",
    width: "80px",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };

  const permapin_animation_container_svg = {
    width: "100%",
    height: "100%",
    opacity: "0",
  };

  React.useEffect(() => {
    permapinAnim();
  }, []);

  return (
    <div
      style={permapin_animation_container}
      className="permapin_animation_container"
    >
      <svg
        style={permapin_animation_container_svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1602.57 2646.48"
      >
        <defs>
          <clipPath id="clip-path">
            <path
              d="M922.7,1278.42c0,36.44,55.87,66,124.79,66s124.8-29.54,124.8-66V1122.53H922.7Z"
              fill="none"
            />
          </clipPath>
          <linearGradient
            id="Безымянный_градиент_2"
            data-name="Безымянный градиент 2"
            x1="1061.1"
            y1="2187.91"
            x2="1016.14"
            y2="656.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d1c5f6" />
            <stop offset="0.04" stopColor="#d7cdf7" stopOpacity="0.86" />
            <stop offset="0.09" stopColor="#dfd7f9" stopOpacity="0.68" />
            <stop offset="0.15" stopColor="#e7e1fa" stopOpacity="0.52" />
            <stop offset="0.22" stopColor="#eee9fc" stopOpacity="0.38" />
            <stop offset="0.29" stopColor="#f3f0fd" stopOpacity="0.26" />
            <stop offset="0.37" stopColor="#f7f5fe" stopOpacity="0.16" />
            <stop offset="0.45" stopColor="#fbfafe" stopOpacity="0.09" />
            <stop offset="0.56" stopColor="#fdfdff" stopOpacity="0.04" />
            <stop offset="0.7" stopColor="#fffeff" stopOpacity="0.01" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g id="g5">
          <g>
            <path
              d="M76.25,2018.72l700.9-384.59,773.12,440.1c65.8,38.51,65.72,133.65-.15,172.05l-585.3,341.16a249.78,249.78,0,0,1-250.61.55L76.08,2219.77C-1.37,2175.09-1.27,2063.27,76.25,2018.72Z"
              fill="#84b0d1"
            />
            <path
              d="M73.58,1965.71l558.19-320.8A273.64,273.64,0,0,1,906.35,1646l641.25,375.23c65.81,38.51,65.72,133.65-.15,172l-585.3,341.16a249.76,249.76,0,0,1-250.6.55L73.41,2166.77C-4,2122.08-3.94,2010.26,73.58,1965.71Z"
              fill="#bce6e3"
            />
          </g>
          <g id="g5o1">
            <g>
              <g>
                <polygon
                  points="382.33 1795.09 382.33 2112.48 188.37 2009.62 188.37 1703.99 382.33 1795.09"
                  fill="#84b0d1"
                />
                <polygon
                  points="623.31 1674.6 382.33 1795.09 382.33 2112.48 623.31 1986.11 623.31 1674.6"
                  fill="#97bcd8"
                />
                <polygon
                  points="188.37 1703.99 382.33 1795.09 432.85 1769.83 623.31 1674.6 427.33 1582.77 188.37 1703.99"
                  fill="#97bcd8"
                />
                <polygon
                  points="427.88 1762.4 274.7 1674.6 274.7 1514.99 427.88 1599.3 427.88 1762.4"
                  fill="#84b0d1"
                />
                <polygon
                  points="274.7 1514.99 382.33 1459.89 536.43 1549.15 427.88 1599.3 274.7 1514.99"
                  fill="#97bcd8"
                />
                <polygon
                  points="425.9 1762.4 439.84 1770.3 623.31 1674.6 536.43 1633.89 536.43 1703.99 425.9 1762.4"
                  fill="#84b0d1"
                />
              </g>
              <polygon
                points="536.43 1703.99 427.88 1762.4 427.88 1599.3 536.43 1549.15 536.43 1703.99"
                fill="#97bcd8"
              />
            </g>
            <g id="g5mm1">
              <path
                d="M364.44,1687.28s33.13,33.73,31.48-203.57V325.91l-38.57-97.39V1544.07Z"
                fill="#bcd4e6"
              />
              <polygon
                points="324.29 195.81 317.48 1611.46 361.61 1629.34 357.35 234.77 324.29 195.81"
                fill="#cfe0ed"
              />
              <circle cx="351.29" cy="1607.93" r="1728.19" fill="none" />
            </g>
            <path
              d="M374.7,1601.17c-11.31-8.34-26.76-10.74-39.28-4.18-13.88,7.27-18.46,19.48-19.43,30.49-1.13-12.67.88-31.22,19.43-41,12.52-6.56,28-4.15,39.28,4.18,13.51,10,29.84,28.57,28.51,59.84,0,.59-.18,1.15-.23,1.73C401.24,1626.27,386.89,1610.16,374.7,1601.17Z"
              fill="#bcd4e6"
            />
            <path
              d="M374.7,1598.88c13.51,10.41,29.84,29.85,28.51,62.52-.73,17.75-13.39,33.6-30.95,36.29-15.5,2.38-40.23-9.21-53.73-46.54,0,0-13-40.29,16.89-56.64C347.94,1587.65,363.39,1590.17,374.7,1598.88Z"
              fill="#cfe0ed"
            />
            <g>
              <g>
                <path
                  d="M737.41,2145.06l282.48-162.35,315.95,184.89c26.71,15.63,26.68,54.25-.06,69.84L1098.15,2376a101.37,101.37,0,0,1-101.74.22L737.34,2226.68C705.89,2208.54,705.93,2163.15,737.41,2145.06Z"
                  fill="#84b0d1"
                />
                <polyline
                  points="713.96 2187.87 743.89 2196.71 749.67 2152.53 713.96 2122.62"
                  fill="#84b0d1"
                />
                <polygon
                  points="1355.86 2190.08 1355.85 2201.97 1340.13 2198.49 1324.93 2176.31 1328.07 2160.43 1331.72 2153.89 1355.59 2139.7 1355.86 2190.08"
                  fill="#84b0d1"
                />
                <path
                  d="M737.41,2077.6,964,1947.36a111.11,111.11,0,0,1,111.48.44l260.34,152.34c26.71,15.63,26.68,54.26-.06,69.85L1098.15,2308.5a101.4,101.4,0,0,1-101.74.22L737.34,2159.23C705.89,2141.09,705.93,2095.69,737.41,2077.6Z"
                  fill="#a9c8df"
                />
              </g>
              <g>
                <path
                  d="M825.17,2082.36l199.12-114.44L1247,2098.24a28.51,28.51,0,0,1,0,49.24l-167.5,97.63a71.49,71.49,0,0,1-71.72.16L825.12,2139.89C803,2127.11,803,2095.11,825.17,2082.36Z"
                  fill="#e6bcd4"
                />
                <polyline
                  points="808.65 2112.54 829.74 2118.76 833.82 2087.63 808.65 2066.54"
                  fill="#e6bcd4"
                />
                <polygon
                  points="1261.12 2114.09 1261.11 2122.48 1250.03 2120.02 1239.32 2104.39 1241.53 2093.2 1244.1 2088.59 1260.93 2078.58 1261.12 2114.09"
                  fill="#e6bcd4"
                />
                <path
                  d="M825.17,2034.81,984.91,1943a78.32,78.32,0,0,1,78.58.31L1247,2050.69a28.51,28.51,0,0,1,0,49.24l-167.5,97.63a71.49,71.49,0,0,1-71.72.16L825.12,2092.35C803,2079.56,803,2047.56,825.17,2034.81Z"
                  fill="#6c96f4"
                />
              </g>
              <g id="g5m1">
                <g>
                  <path
                    d="M733.83,1972.25,1020,1807.78l320.09,187.31c27.06,15.83,27,55-.06,70.76l-240.74,140.32a102.72,102.72,0,0,1-103.07.22L733.75,2055C701.9,2036.57,701.94,1990.58,733.83,1972.25Z"
                    fill="#84b0d1"
                  />
                  <polyline
                    points="710.08 2015.63 740.4 2024.58 746.25 1979.83 710.08 1949.53"
                    fill="#84b0d1"
                  />
                  <polygon
                    points="1360.37 2017.86 1360.36 2029.91 1344.44 2026.39 1329.04 2003.91 1332.22 1987.83 1335.92 1981.21 1360.1 1966.82 1360.37 2017.86"
                    fill="#84b0d1"
                  />
                  <path
                    d="M733.83,1903.92l229.58-132a112.58,112.58,0,0,1,112.93.44l263.75,154.34c27.06,15.84,27,55-.06,70.76l-240.74,140.32a102.72,102.72,0,0,1-103.07.23L733.75,1986.61C701.9,1968.23,701.94,1922.24,733.83,1903.92Z"
                    fill="#a9c8df"
                  />
                  <path
                    d="M768,1909.64l203.57-117a99.78,99.78,0,0,1,100.13.39l233.86,136.84c24,14,24,48.74-.06,62.75L1092,2117a91.08,91.08,0,0,1-91.39.2L767.91,1983C739.66,1966.66,739.7,1925.89,768,1909.64Z"
                    fill="#6da0bf"
                  />
                  <path
                    d="M784.72,1922l190.8-109.65a93.53,93.53,0,0,1,93.86.37L1288.57,1941c22.49,13.16,22.47,45.68,0,58.81l-200.07,116.61a85.35,85.35,0,0,1-85.66.19L784.66,1990.75C758.19,1975.47,758.22,1937.25,784.72,1922Z"
                    fill="#84b0d1"
                  />
                </g>
                <g>
                  <ellipse
                    cx="1038.44"
                    cy="1949.25"
                    rx="96.4"
                    ry="182.06"
                    transform="translate(-933.93 2943.07) rotate(-88.7)"
                    fill="none"
                    stroke="#222326"
                    strokeWidth="7"
                  />
                  <path
                    d="M1015.2,1986.2c0-.92,1.82-1.8,2.74-3.17,1.79-.88,2.71-2.25,4.5-3.13-3.5-.09-6.11-.62-9.62-.72s-7-1.11-9.58-1.64c-3.46-1-6.07-1.56-10.4-3.06a47.12,47.12,0,0,1-9.48-4.43c-5.15-2.92-8.55-5.79-11.06-9.1s-4.16-6.15-4.92-9.41,1.1-6,3-8.74,5.45-5.42,9.91-7.62c10.71-5.28,23.93-7.25,37-5.51,14,1.3,28.67,6.79,44.12,15.55l14.6,8.27,6.24-3.08c5.36-2.64,7.21-5.38,7.31-8.16-.76-3.26-3.27-6.58-9.28-10-5.15-2.92-9.48-4.43-14.73-4.57a24.37,24.37,0,0,0-12.35,2.46l-25.76-14.6a52.47,52.47,0,0,1,15.06-4.71,82,82,0,0,1,19.3-.41,111.26,111.26,0,0,1,20,3.78,97.81,97.81,0,0,1,20.71,8.9,51.37,51.37,0,0,1,13.64,10.56c3.37,3.8,5.87,7.12,6.6,11.31a12.51,12.51,0,0,1-3,10.59,38.29,38.29,0,0,1-12.63,9.87l-44.61,22c-5.35,2.64-9.81,4.84-12.52,7.09s-5.42,4.49-6.35,5.86l-1.78.88Zm-6.17-23.35a28.08,28.08,0,0,0,7.77,3.45c3.46,1,6.07,1.55,8.68,2.09a22.74,22.74,0,0,0,7.86.67l7,.18,17.84-8.8-12.88-7.3c-4.29-2.43-7.72-4.38-11.19-5.4a41.43,41.43,0,0,0-10.44-2.13c-3.5-.09-6.11-.63-9.65.21a25.26,25.26,0,0,0-7.1,2.59c-3.57,1.76-5.39,3.57-5.49,6.35S1004.74,1960.41,1009,1962.85Z"
                    fill="#222326"
                  />
                </g>
              </g>
            </g>
            <g id="g5mm9">
              <g id="g5mm8">
                <polygon
                  points="1018.68 1428.09 1015.76 1765.54 1037.64 1818.1 1059.52 1765.69 1061.79 1433.39 1018.68 1428.09"
                  fill="#909ca3"
                />
                <circle cx="1036.76" cy="1765.69" r="635.55" fill="none" />
              </g>
            </g>
            <g>
              <g id="g5mm5">
                <ellipse
                  cx="1040.49"
                  cy="1304.12"
                  rx="199.05"
                  ry="105.25"
                  fill="#97bcd8"
                />
                <path
                  d="M1040.49,1409.37c99.7,0,182-38.81,196.55-89.38a57.41,57.41,0,0,1,2.5,15.87c0,58.12-89.12,105.25-199,105.25S841.43,1394,841.43,1335.86a57.41,57.41,0,0,1,2.5-15.87C858.44,1370.56,940.78,1409.37,1040.49,1409.37Z"
                  fill="#84b0d1"
                />
                <path d="M1171.29,1123.53v154.89c0,35.83-55.54,65-123.8,65s-123.79-29.15-123.79-65V1123.53h247.59m1-1H922.7v155.89c0,36.44,55.87,66,124.79,66s124.8-29.54,124.8-66V1122.53Z" />
                <g clipPath="url(#clip-path)">
                  <path
                    id="g5mm6"
                    d="M1047.49,1053.81c-68.92,0-124.79,29.54-124.79,66v158.63c0,36.44,55.87,66,124.79,66s124.8-29.54,124.8-66V1119.79C1172.29,1083.35,1116.42,1053.81,1047.49,1053.81Z"
                    fill="#d4e6bc"
                  />
                </g>
                <ellipse
                  cx="1047.49"
                  cy="1038.45"
                  rx="169.35"
                  ry="89.54"
                  fill="#97bcd8"
                />
                <path
                  d="M1047.49,1128c84.83,0,154.88-33,167.22-76a48.8,48.8,0,0,1,2.13,13.51c0,49.45-75.82,89.53-169.35,89.53s-169.34-40.08-169.34-89.53a48.8,48.8,0,0,1,2.13-13.51C892.62,1095,962.67,1128,1047.49,1128Z"
                  fill="#84b0d1"
                />
                <ellipse
                  cx="1055.31"
                  cy="981.13"
                  rx="74.94"
                  ry="39.62"
                  fill="#c1ced6"
                />
                <path
                  d="M1055.31,1020.75c37.53,0,68.53-14.61,74-33.65a21.7,21.7,0,0,1,.94,6c0,21.88-33.55,39.62-74.93,39.62s-74.94-17.74-74.94-39.62a21.7,21.7,0,0,1,.94-6C986.77,1006.14,1017.77,1020.75,1055.31,1020.75Z"
                  fill="#d4e6bc"
                />
              </g>
              <g id="g5mm4">
                <path
                  d="M1101.31,736.53V1005s-14,22.22-32,0V736.53Z"
                  fill="#cfe0ed"
                />
                <path
                  d="M1041.2,702.63V971.07s-14,22.22-32,0V702.63Z"
                  fill="#bcd4e6"
                />
              </g>
              <g id="g5mm2">
                <polygon
                  points="536.43 248.8 536.43 405.66 294.17 242.45 294.17 77.44 536.43 248.8"
                  fill="#84b0d1"
                />
                <polygon
                  points="582.9 217.97 536.43 248.8 536.43 405.66 582.9 368.48 582.9 217.97"
                  fill="#d4e6bc"
                />
                <polygon
                  points="340.82 43.89 294.17 77.44 536.43 248.8 582.9 217.97 340.82 43.89"
                  fill="#97bcd8"
                />
                <polyline
                  points="573.62 258.77 573.62 246.99 550.39 262.4 550.39 379.36 1011.96 717.78 1011.96 586.54 559.66 266.93"
                  fill="#bcd4e6"
                />
                <polygon
                  points="580.24 254.69 561.59 268.29 1011.96 586.54 1025.18 566.14 580.24 254.69"
                  fill="#cfe0ed"
                />
                <path
                  d="M966.1,602.34c2.71,9.7,3.09,20.66-4.54,28.37s-18.49,7.38-26.77,1L804,531.68s-19-21.27-8.24-40.56c6.16-11,18.65-13.31,28-6.52l122.48,88.95A53.31,53.31,0,0,1,966.1,602.34Z"
                  fill="#84b0d1"
                />
                <path
                  d="M765.35,456.12c2.71,9.7,3.09,20.66-4.54,28.38s-18.49,7.38-26.77,1L603.3,385.47s-19-21.27-8.24-40.56c6.16-11,18.65-13.31,28-6.53l122.47,88.95A53.3,53.3,0,0,1,765.35,456.12Z"
                  fill="#84b0d1"
                />
                <g id="g5mm3">
                  <polygon
                    points="999.84 574.88 999.84 717.78 1073.67 759.26 1072.57 620.54 999.84 574.88"
                    fill="#84b0d1"
                  />
                  <g>
                    <g>
                      <path
                        d="M1045.11,644.73c7.44,7.07,16.42,20.26,15.69,42.44-.4,12.05-7.37,22.81-17,24.64-8.53,1.62-22.13-6.25-29.56-31.59,0,0-7.13-27.36,9.3-38.46C1030.39,637.11,1038.89,638.81,1045.11,644.73Z"
                        fill="#cfe0ed"
                      />
                      <path
                        d="M1045.11,646.28c-6.22-5.66-14.72-7.29-21.61-2.84-7.63,4.94-10.15,13.23-10.69,20.7-.62-8.6.49-21.19,10.69-27.8,6.89-4.45,15.39-2.82,21.61,2.84,7.44,6.77,16.42,19.4,15.69,40.63,0,.4-.1.78-.13,1.17C1059.72,663.33,1051.82,652.38,1045.11,646.28Z"
                        fill="#bcd4e6"
                      />
                    </g>
                    <polygon
                      points="1036.83 540.87 999.84 574.88 1072.57 620.54 1110.04 586.54 1036.83 540.87"
                      fill="#7fabc6"
                    />
                    <polygon
                      points="1110.04 586.54 1110.04 729.34 1073.67 759.26 1072.57 620.54 1110.04 586.54"
                      fill="#97bcd8"
                    />
                  </g>
                </g>
                <circle cx="333.51" cy="168.75" r="1320.39" fill="none" />
              </g>
            </g>
            <path
              id="g5o2"
              d="M573.14,925.4l171.11,998.74a75.75,75.75,0,0,0,24.6,47l1.23,1.11a3.56,3.56,0,0,0,.59.43l222.86,128.36c26.29,15.14,64.69,19,90.84,3.58l200.93-117.82a34.57,34.57,0,0,0,13.56-14.63h0c.9-1.86,1.85-3.71,2.9-5.5,7.76-13.24,6.6-21.29,8.44-37.41L1474.37,906.53"
              fill="url(#Безымянный_градиент_2)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
