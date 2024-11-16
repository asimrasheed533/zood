import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Value({ values }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="home__value__main">
      <div className="home__value__container__gif">
        <div className="home__value__container">
          <div className="home__value__container__content">
            <div className="home__value__container__left">
              {selectedLanguage === "ar" ? (
                <div className="home__value__container__left__heading__arabic">
                  قيمنا
                </div>
              ) : (
                <div
                  className="home__value__container__left__heading"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="1500"
                >
                  <svg
                    width="100"
                    height="307"
                    viewBox="0 0 64 267"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.078 245.669c0 11.031-7.584 19.157-17.926 19.157-10.341 0-17.925-8.126-17.925-19.157s7.584-19.157 17.925-19.157c10.342 0 17.926 8.126 17.926 19.157Zm-8.077 0c0-5.22-3.89-9.307-9.849-9.307s-9.849 4.087-9.849 9.307c0 5.22 3.89 9.307 9.85 9.307 5.958 0 9.848-4.087 9.848-9.307Zm-19.304-42.534v-9.356h26.691v8.913h-2.856c2.216 2.019 3.3 4.875 3.3 7.929 0 6.549-3.743 11.326-12.214 11.326H21.697v-9.357h13.395c4.136 0 5.762-1.625 5.762-4.432 0-2.757-1.822-5.023-6.304-5.023H21.697Zm3.2-24.297c-2.412-1.92-3.643-5.023-3.643-8.963h8.42c-.098.838-.147 1.429-.147 2.118 0 3.792 1.92 6.402 6.599 6.402h12.262v9.357H21.697v-8.914h3.2Zm-10.98-53.007v-9.652l34.471 14.774v9.603L13.916 155.28v-10.538l22.456-9.357-22.456-9.554Zm7.337-20.631c0-8.667 3.84-13.64 12.311-13.64h14.823v8.716h-3.447c2.56 1.329 3.89 3.989 3.89 7.879 0 6.402-3.595 9.948-8.224 9.948-4.924 0-7.977-3.595-7.977-11.869v-5.318c-2.709.148-4.236 1.97-4.236 5.663 0 2.561.887 5.417 2.315 7.239l-6.353 3.152c-2.019-3.053-3.102-7.584-3.102-11.77Zm21.668.345c0-2.068-.985-3.89-3.103-4.629h-2.314v4.038c0 3.004 1.083 4.088 2.708 4.088 1.576 0 2.709-1.281 2.709-3.497Zm5.466-19.892h-36.54v-9.357h36.54v9.357Zm-26.691-34.15v-9.357h26.691v8.913h-2.856c2.216 2.02 3.3 4.876 3.3 7.929 0 6.55-3.743 11.326-12.214 11.326H21.697v-9.356h13.395c4.136 0 5.762-1.625 5.762-4.433 0-2.757-1.822-5.023-6.304-5.023H21.697ZM35.092 8.836c.69 0 1.576.098 2.314.147v19.403c2.709-.788 4.285-3.102 4.285-6.55 0-2.61-.739-4.333-2.315-6.155l5.122-4.925c2.856 2.561 4.333 6.304 4.333 11.376 0 9.505-5.86 15.66-13.838 15.66-8.027 0-13.74-6.254-13.74-14.675 0-7.88 5.024-14.281 13.839-14.281Zm-7.19 14.232c0 2.905 1.773 4.924 4.58 5.466V17.602c-2.807.493-4.58 2.561-4.58 5.467Z"
                      fill="#fff"
                    />
                    <mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x="13.388"
                      y=".5"
                      width="40"
                      height="259"
                      fill="#000"
                    >
                      <path fill="#fff" d="M13.388.5h40v259h-40z" />
                      <path d="M52.078 238.669c0 11.031-7.584 19.157-17.926 19.157-10.341 0-17.925-8.126-17.925-19.157s7.584-19.157 17.925-19.157c10.342 0 17.926 8.126 17.926 19.157Zm-8.077 0c0-5.22-3.89-9.307-9.849-9.307s-9.849 4.087-9.849 9.307c0 5.22 3.89 9.307 9.85 9.307 5.958 0 9.848-4.087 9.848-9.307Zm-19.304-42.534v-9.356h26.691v8.913h-2.856c2.216 2.019 3.3 4.875 3.3 7.929 0 6.549-3.743 11.326-12.214 11.326H24.697v-9.357h13.395c4.136 0 5.762-1.625 5.762-4.432 0-2.757-1.822-5.023-6.304-5.023H24.697Zm3.2-24.297c-2.412-1.92-3.643-5.023-3.643-8.963h8.42c-.098.838-.147 1.429-.147 2.118 0 3.792 1.92 6.402 6.599 6.402h12.262v9.357H24.697v-8.914h3.2Zm-10.98-53.007v-9.652l34.471 14.774v9.603L16.916 148.28v-10.538l22.456-9.357-22.456-9.554Zm7.337-20.63c0-8.668 3.84-13.642 12.311-13.642h14.823v8.717h-3.447c2.56 1.33 3.89 3.989 3.89 7.879 0 6.402-3.595 9.948-8.224 9.948-4.924 0-7.977-3.595-7.977-11.868v-5.32c-2.709.149-4.236 1.97-4.236 5.664 0 2.561.887 5.417 2.315 7.239l-6.353 3.152c-2.019-3.053-3.102-7.584-3.102-11.77Zm21.668.344c0-2.068-.985-3.89-3.103-4.63h-2.314v4.04c0 3.003 1.083 4.087 2.708 4.087 1.576 0 2.709-1.281 2.709-3.497Zm5.466-19.892h-36.54v-9.357h36.54v9.357Zm-26.691-34.15v-9.357h26.691v8.913h-2.856c2.216 2.02 3.3 4.876 3.3 7.929 0 6.55-3.743 11.326-12.214 11.326H24.697v-9.356h13.395c4.136 0 5.762-1.625 5.762-4.433 0-2.757-1.822-5.023-6.304-5.023H24.697ZM38.092 1.836c.69 0 1.576.098 2.314.147v19.403c2.709-.788 4.285-3.102 4.285-6.55 0-2.61-.739-4.333-2.315-6.155l5.122-4.925c2.856 2.561 4.333 6.304 4.333 11.376 0 9.505-5.86 15.66-13.838 15.66-8.027 0-13.74-6.254-13.74-14.675 0-7.88 5.024-14.281 13.839-14.281Zm-7.19 14.232c0 2.905 1.773 4.924 4.58 5.466V10.602c-2.807.493-4.58 2.561-4.58 5.467Z" />
                    </mask>
                    <path
                      d="M51.078 238.669c0 10.543-7.199 18.157-16.926 18.157v2c10.956 0 18.926-8.638 18.926-20.157h-2Zm-16.926 18.157c-9.727 0-16.925-7.614-16.925-18.157h-2c0 11.519 7.969 20.157 18.925 20.157v-2Zm-16.925-18.157c0-10.543 7.198-18.157 16.925-18.157v-2c-10.956 0-18.925 8.638-18.925 20.157h2Zm16.925-18.157c9.727 0 16.926 7.614 16.926 18.157h2c0-11.519-7.97-20.157-18.926-20.157v2Zm10.85 18.157c0-5.796-4.363-10.307-10.85-10.307v2c5.43 0 8.85 3.663 8.85 8.307h2Zm-10.85-10.307c-6.487 0-10.849 4.511-10.849 10.307h2c0-4.644 3.419-8.307 8.85-8.307v-2Zm-10.849 10.307c0 5.796 4.362 10.307 10.85 10.307v-2c-5.431 0-8.85-3.663-8.85-8.307h-2Zm10.85 10.307c6.486 0 10.848-4.511 10.848-10.307h-2c0 4.644-3.418 8.307-8.849 8.307v2Zm-9.456-52.841h-1v1h1v-1Zm0-9.356v-1h-1v1h1Zm26.691 0h1v-1h-1v1Zm0 8.913v1h1v-1h-1Zm-2.856 0v-1H45.95l1.908 1.739.674-.739Zm-23.835 19.255h-1v1h1v-1Zm0-9.357v-1h-1v1h1Zm1-9.455v-9.356h-2v9.356h2Zm-1-8.356h26.691v-2H24.697v2Zm25.691-1v8.913h2v-8.913h-2Zm1 7.913h-2.856v2h2.856v-2Zm-3.53 1.739c1.977 1.801 2.973 4.373 2.973 7.19h2c0-3.29-1.17-6.431-3.626-8.668l-1.347 1.478Zm2.973 7.19c0 3.089-.88 5.639-2.64 7.415-1.757 1.773-4.524 2.911-8.573 2.911v2c4.422 0 7.762-1.25 9.994-3.503 2.228-2.249 3.22-5.363 3.22-8.823h-2Zm-11.213 10.326H24.697v2h14.921v-2Zm-13.921 1v-9.357h-2v9.357h2Zm-1-8.357h13.395v-2H24.697v2Zm13.395 0c2.17 0 3.884-.421 5.066-1.39 1.223-1.003 1.696-2.44 1.696-4.042h-2c0 1.206-.34 1.985-.964 2.496-.665.545-1.831.936-3.798.936v2Zm6.762-5.432c0-1.604-.537-3.153-1.804-4.29-1.255-1.126-3.1-1.733-5.5-1.733v2c2.082 0 3.388.526 4.165 1.222.764.686 1.139 1.648 1.139 2.801h2Zm-7.304-6.023H24.697v2H37.55v-2Zm-9.652-23.297v1h2.862l-2.24-1.782-.622.782Zm-3.644-8.963v-1h-1v1h1Zm8.42 0 .994.117.131-1.117h-1.124v1Zm18.714 8.52h1v-1h-1v1Zm0 9.357v1h1v-1h-1Zm-26.691 0h-1v1h1v-1Zm0-8.914v-1h-1v1h1Zm3.824-.782c-2.105-1.675-3.267-4.442-3.267-8.181h-2c0 4.142 1.3 7.579 4.021 9.746l1.246-1.565Zm-4.267-7.181h8.42v-2h-8.42v2Zm7.428-1.116c-.101.855-.155 1.489-.155 2.234h2c0-.634.044-1.181.14-2.001l-1.985-.233Zm-.155 2.234c0 2.052.52 3.936 1.818 5.31 1.309 1.384 3.258 2.092 5.781 2.092v-2c-2.155 0-3.506-.597-4.327-1.466-.832-.879-1.272-2.196-1.272-3.936h-2Zm7.599 7.402h12.262v-2H39.126v2Zm11.262-1v9.357h2v-9.357h-2Zm1 8.357H24.697v2h26.691v-2Zm-25.691 1v-8.914h-2v8.914h2Zm-1-7.914h3.2v-2h-3.2v2Zm-7.78-54.007h-1v.662l.608.258.391-.92Zm0-9.652.393-.919-1.394-.597v1.516h1Zm34.471 14.774h1v-.66l-.606-.259-.394.919Zm0 9.603.393.919.607-.259v-.66h-1ZM16.916 148.28h-1v1.515l1.393-.595-.393-.92Zm0-10.538-.384-.923-.616.256v.667h1Zm22.456-9.357.385.923 2.192-.913-2.185-.93-.392.92Zm-21.456-9.554v-9.652h-2v9.652h2Zm-1.394-8.733 34.472 14.774.788-1.838L17.31 108.26l-.788 1.838Zm33.866 13.855v9.603h2v-9.603h-2Zm.607 8.683-34.472 14.725.786 1.839 34.472-14.725-.786-1.839ZM17.916 148.28v-10.538h-2v10.538h2Zm-.615-9.615 22.456-9.357-.77-1.846-22.456 9.357.77 1.846Zm22.463-11.2-22.456-9.554-.783 1.84 22.456 9.554.783-1.84Zm11.624-42.906h1v-1h-1v1Zm0 8.717v1h1v-1h-1Zm-3.447 0v-1l-.46 1.887.46-.887Zm-12.312.64h1V92.86l-1.054.057.054.999Zm-1.92 12.902.444.896 1.1-.546-.757-.967-.787.617Zm-6.353 3.152-.834.552.487.736.792-.392-.445-.896ZM42.82 93.916l.33-.944-.16-.056h-.17v1Zm-2.314 0v-1h-1v1h1ZM25.254 98.2c0-4.207.934-7.34 2.734-9.415 1.777-2.048 4.541-3.226 8.577-3.226v-2c-4.434 0-7.826 1.31-10.087 3.915-2.239 2.58-3.224 6.266-3.224 10.726h2Zm11.311-12.64h14.823v-2H36.565v2Zm13.823-1v8.716h2v-8.717h-2Zm1 7.716h-3.447v2h3.447v-2Zm-3.908 1.887c2.12 1.1 3.351 3.331 3.351 6.992h2c0-4.12-1.427-7.208-4.43-8.767l-.92 1.775Zm3.351 6.992c0 3.017-.845 5.251-2.128 6.716-1.275 1.455-3.05 2.232-5.096 2.232v2c2.584 0 4.92-.997 6.6-2.914 1.672-1.909 2.624-4.649 2.624-8.034h-2Zm-7.224 8.948c-2.187 0-3.856-.78-5.021-2.413-1.206-1.69-1.956-4.414-1.956-8.456h-2c0 4.233.776 7.442 2.328 9.618 1.592 2.232 3.912 3.251 6.65 3.251v-2ZM36.63 99.235v-5.32h-2v5.32h2Zm-1.055-6.318c-1.583.087-2.939.68-3.871 1.891-.906 1.177-1.31 2.806-1.31 4.771h2c0-1.728.36-2.857.895-3.551.508-.66 1.27-1.052 2.395-1.114l-.109-1.997Zm-5.18 6.662c0 2.748.94 5.831 2.527 7.856l1.574-1.234c-1.269-1.619-2.102-4.248-2.102-6.622h-2Zm2.87 6.344-6.353 3.151.889 1.792 6.352-3.152-.889-1.791Zm-5.075 3.495c-1.881-2.845-2.936-7.167-2.936-11.218h-2c0 4.322 1.112 9.061 3.268 12.322l1.668-1.104Zm18.732-10.873c0-2.404-1.176-4.667-3.773-5.573l-.659 1.888c1.637.571 2.432 1.953 2.432 3.685h2Zm-4.103-5.63h-2.314v2h2.314v-2Zm-3.314 1v4.04h2v-4.04h-2Zm0 4.04c0 1.59.281 2.865.938 3.761.702.956 1.712 1.326 2.77 1.326v-2c-.566 0-.91-.173-1.157-.509-.29-.397-.551-1.166-.551-2.579h-2Zm3.708 5.087c1.082 0 2.05-.451 2.725-1.291.66-.821.984-1.937.984-3.206h-2c0 .947-.242 1.579-.543 1.953-.285.354-.672.544-1.166.544v2Zm8.175-24.389v1h1v-1h-1Zm-36.54 0h-1v1h1v-1Zm0-9.357v-1h-1v1h1Zm36.54 0h1v-1h-1v1Zm0 8.357h-36.54v2h36.54v-2Zm-35.54 1v-9.357h-2v9.357h2Zm-1-8.357h36.54v-2h-36.54v2Zm35.54-1v9.357h2v-9.357h-2ZM24.697 44.502h-1v1h1v-1Zm0-9.356v-1h-1v1h1Zm26.691 0h1v-1h-1v1Zm0 8.913v1h1v-1h-1Zm-2.856 0v-1H45.95l1.908 1.74.674-.74ZM24.697 63.314h-1v1h1v-1Zm0-9.356v-1h-1v1h1Zm1-9.456v-9.356h-2v9.356h2Zm-1-8.356h26.691v-2H24.697v2Zm25.691-1v8.913h2v-8.913h-2Zm1 7.913h-2.856v2h2.856v-2Zm-3.53 1.74c1.977 1.8 2.973 4.372 2.973 7.189h2c0-3.29-1.17-6.431-3.626-8.668l-1.347 1.478Zm2.973 7.189c0 3.09-.88 5.639-2.64 7.415-1.757 1.773-4.524 2.911-8.573 2.911v2c4.422 0 7.762-1.25 9.994-3.503 2.228-2.25 3.22-5.363 3.22-8.823h-2ZM39.618 62.314H24.697v2h14.921v-2Zm-13.921 1v-9.356h-2v9.356h2Zm-1-8.356h13.395v-2H24.697v2Zm13.395 0c2.17 0 3.884-.422 5.066-1.39 1.223-1.004 1.696-2.44 1.696-4.043h-2c0 1.206-.34 1.985-.964 2.496-.665.545-1.831.937-3.798.937v2Zm6.762-5.433c0-1.604-.537-3.153-1.804-4.29-1.255-1.125-3.1-1.733-5.5-1.733v2c2.082 0 3.388.526 4.165 1.222.764.686 1.139 1.648 1.139 2.801h2Zm-7.304-6.023H24.697v2H37.55v-2Zm2.856-41.518h1V1.05l-.933-.062-.067.997Zm0 19.403h-1v1.333l1.28-.373-.28-.96Zm1.97-12.705-.693-.721-.684.657.62.718.757-.654Zm5.122-4.925.667-.744-.691-.62-.67.643.694.721ZM35.482 21.535l-.19.982 1.19.23v-1.212h-1Zm0-10.933h1v-1.19l-1.173.205.173.985Zm2.61-7.765c.647 0 1.436.091 2.248.145l.133-1.995c-.665-.045-1.65-.15-2.381-.15v2Zm1.314-.853v19.403h2V1.984h-2Zm1.28 20.363c1.568-.456 2.842-1.369 3.712-2.686.864-1.307 1.293-2.95 1.293-4.824h-2c0 1.575-.36 2.812-.96 3.721-.595.9-1.464 1.537-2.604 1.869l.559 1.92Zm5.005-7.51c0-2.868-.838-4.82-2.558-6.81l-1.513 1.31c1.431 1.655 2.07 3.15 2.07 5.502h2Zm-2.622-5.434 5.122-4.925-1.386-1.442-5.122 4.925 1.386 1.442Zm3.761-4.901c2.59 2.322 4.001 5.76 4.001 10.631h2c0-5.275-1.544-9.321-4.666-12.12L46.83 4.502Zm4.001 10.631c0 4.547-1.4 8.21-3.67 10.724-2.264 2.508-5.45 3.936-9.168 3.936v2c4.26 0 7.993-1.65 10.653-4.596 2.655-2.94 4.185-7.107 4.185-12.064h-2Zm-12.838 14.66c-7.407 0-12.74-5.736-12.74-13.675h-2c0 8.903 6.093 15.675 14.74 15.675v-2Zm-12.74-13.675c0-3.731 1.189-7.048 3.353-9.422 2.153-2.36 5.336-3.86 9.486-3.86v-2c-4.666 0-8.401 1.703-10.964 4.513-2.55 2.797-3.874 6.62-3.874 10.769h2Zm4.649-.05c0 1.664.51 3.131 1.475 4.267.961 1.133 2.32 1.874 3.915 2.182l.38-1.964c-1.213-.234-2.144-.774-2.77-1.512-.625-.735-1-1.73-1-2.972h-2Zm6.58 5.467V10.602h-2v10.933h2ZM35.309 9.617c-1.607.282-2.972 1.028-3.934 2.169-.963 1.142-1.473 2.621-1.473 4.283h2c0-1.244.376-2.252 1.002-2.994.626-.742 1.55-1.277 2.75-1.488l-.345-1.97Z"
                      fill="#fff"
                      mask="url(#a)"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="home__value__container__right">
              {values?.map((value, index) => (
                <div
                  key={index}
                  className="home__value__container__right__card"
                >
                  <div
                    className="home__value__container__right__card__icon"
                    data-aos="fade-right"
                    data-aos-delay="60"
                    data-aos-duration="1500"
                  >
                    <Image loading="lazy" src={value.logo} alt="logo" />
                  </div>
                  <div className="home__value__container__right__card__title">
                    <AnimateText>
                      {selectedLanguage === "ar"
                        ? value?.heading?.ar
                        : value?.heading?.en}
                    </AnimateText>
                  </div>
                  <div className="home__value__container__right__card__text">
                    <AnimateText>
                      {selectedLanguage === "ar"
                        ? value?.content.ar
                        : value?.content.en}
                    </AnimateText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="home__value__container__spacing">&nbsp;</div>
    </div>
  );
}

export default memo(Value);