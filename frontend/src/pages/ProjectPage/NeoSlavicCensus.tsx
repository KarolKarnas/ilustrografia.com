import { FaDragon } from "react-icons/fa6";
import Button from "../../components/Button";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import IconDivider from "../../components/primitives/IconDivider";
import MainHeading from "../../components/primitives/MainHeading";
import MainStrongText from "../../components/primitives/MainStrongText";
import { useGetProductsByCategoryQuery } from "../../slices/productsApiSlice";
import { useGetNeoSlavicQuery } from "../../slices/ytApiSlice";
import SectionMain from "../../components/SectionMain";
import MainTitlesWrapper from "../../components/MainTitlesWrapper";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import MainText from "../../components/primitives/MainText";
import Spinner from "../../components/Spinner";
import LatestVideos from "../../components/LatestVideos";
import { getError } from "../../utils/utils";
import Message from "../../components/Message";
import { ApiError } from "../../types/ApiError";
import ProductsGrid from "../../components/ProductsGrid";
import IllustrationsGrid from "../../components/IllustrationsGrid";

const NeoSlavicCensus = () => {
  const {
    data: neoSlavicProducts,
    isLoading: isLoadingNeoSlavic,
    error: errorNeoSlavic,
  } = useGetProductsByCategoryQuery("neo-slavic-census");

  const {
    data: ytSearch,
    isLoading: ytSearchLoading,
    error: ytSearchError,
  } = useGetNeoSlavicQuery(3);

  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
      <section className="relative flex flex-col items-center justify-center">
        <div className=" fixed -left-[23rem] top-[5rem] hidden w-1/2 md:flex md:items-center md:justify-center  ">
          <ImageMouseMoving
            src={"/images/neo-slavic-census-about/basilisk-translucent.png"}
            reverse={true}
          />
        </div>

        <div className="fixed  -right-[22rem] top-[5rem] hidden w-1/2 md:flex md:items-center md:justify-center ">
          <ImageMouseMoving
            src={"/images/neo-slavic-census-about/book-translucent.png"}
          />
        </div>

        <div className="fixed -right-[28rem] top-[32rem] -z-10 hidden w-1/2 md:flex  md:items-center md:justify-center ">
          <ImageMouseMoving
            src={
              "/images/neo-slavic-census-about/basilisk-tail-translucent.png"
            }
            reverse={true}
          />
        </div>

        <div className="absolute top-8 flex items-center justify-center md:top-16 ">
          <h1 className="my-2 whitespace-nowrap text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
            Neo-slavic
          </h1>
        </div>
        <div className="absolute top-[20rem] flex items-center justify-center sm:top-[34rem] ">
          <h2 className="my-2 text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
            Census
          </h2>
        </div>
        {/* Gradient Background */}
        <div className="flex h-full  flex-col items-center justify-start bg-slavic-gradient dark:bg-black-slavic-gradient">
          <img
            className=" mt-16 w-11/12 rounded-full  shadow-hero md:w-auto"
            src="/images/neo-slavic-census-about/neo-slavic-census.jpg"
            alt=""
          />
          <div className="z-10 flex w-10/12 flex-col items-center justify-center md:w-1/3">
            <div className="my-8 flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <Button
                text={"shop"}
                color={"red"}
                link={"/shop?category=neo-slavic-census"}
              />
              <Button
                text={"illustrations"}
                color={"white"}
                link={"/illustrations"}
              />
            </div>
            <p className="flex flex-col items-center justify-center gap-4  text-center  font-cormorant-infant text-xl font-semibold italic text-eerie-black drop-shadow-lg dark:text-ivory">
              <span>
                The stoic Carpathian mountains stand in silence, their majestic
                presence awe-inspiring, much like they did for our forefathers.
                The rhythmic roar of the Baltic Sea waves, as they crash with
                foamy grace against rugged cliffs, carries an ageless and
                unwavering melody.
              </span>
              <span>And what lies between them?</span>
            </p>
            <img
              className="my-6 h-16 dark:invert-90"
              src=" /images/neo-slavic-census-about/logo-neo-slavic-census.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="my-6 flex w-full flex-col items-center justify-center font-light md:my-16 md:w-7/12 xl:w-6/12">
        <MainHeading>Slava!</MainHeading>
        <MainStrongText>
          {" "}
          How many millennia have these Slavic lands borne!
        </MainStrongText>
        <div className="py-4">
          <IconDivider>
            <FaDragon />
          </IconDivider>
        </div>
        <p className="block dark:text-ivory ">
          <span className="lea float-left mr-2 mt-2  bg-red-magic px-5 py-2 font-fondamento text-5xl text-ivory">
            T
          </span>
          hese endless wildernesses, where the densely arched crowns of trees
          once confidently reached towards the Great Sun, have contracted
          incomprehensibly. The few human settlements, which timidly huddled
          behind their fences, living by the cycle of day and night, spring and
          winter, have expanded, grown upward, and harnessed the laws of Nature.
          Now, not only do rivers rush toward the sea, forming the arteries of
          these lands, but they are also adorned with the black veins of
          solidified roads, which have interlinked into a network and diminished
          the world. Heavy machines, lifeless creatures obedient to human will,
          speed along them. And the sky? It appears almost the same. The night
          is adorned with unchanging stars and the wandering moon on the same
          path. The day is still azure as before, and variously shaped clouds
          roll across its surface. However, the firmament no longer belongs
          solely to winged beings who jealously guarded the gift of flight.
          Humans have detached themselves from the earth, ascended, and laid
          claim to the celestial vault as well.
        </p>
        <div className="py-8 text-center">
          <MainStrongText> Man has become everywhere</MainStrongText>
        </div>
        <p className="flex flex-col justify-center gap-3 dark:text-ivory">
          <span>
            <span className="lea float-left mr-2 font-fondamento  text-5xl text-red-magic">
              M
            </span>
            an has become fearless. He is the ruler of these lands. The harshest
            winters no longer daunt him, nor do scorching summer heatwaves. He
            effortlessly dispels the darkness of night and has the power to
            overshadow the brightness of noon. He reigns over all the wildlife
            and rules over nature with an iron-fisted tyranny. How greatly this
            man has spread his dominion! To such an extent that it would seem he
            has ceased to notice his fellow inhabitants of Mother Earth. And I
            am not only speaking of our lesser brethren. For once-wild,
            formidable, and numerous animals are no longer as wild or
            formidable, and their numbers have dwindled, confined to uninhabited
            lands and protected reserves of the Slavic realm. But we will not
            speak of them here. We will speak of other beings, those whom no one
            has cared for in a long time, those who bear many names, and of whom
            most Slavs no longer wish to take notice.
          </span>
          <span>Who are we talking about?</span>
        </p>
        <div className="py-8 text-center">
          <MainStrongText>
            About beasts, monsters, abominations, and creatures
          </MainStrongText>
        </div>
        <p className="flex flex-col justify-center gap-3 dark:text-ivory">
          <span>
            <span className="lea float-left mr-2 font-fondamento  text-5xl text-red-magic">
              A
            </span>
            bout entities, figures, rascals, and reprobates. About the good and
            kind, and those morally twisted. About the predatory and swift, and
            those airborne and mischievous. And about those from the otherworld,
            companions of the diabolic. And about those without form or life,
            yet eager to exist. About the fiery and scorching, and the beautiful
            and enticing. About the uglies that frighten, and the troubles they
            foretell. About the manifold, diverse, of all kinds and sorts. As
            large as oaks that like to bite. Or those as small as little mice.
            Or altogether entirely invisible.
          </span>
        </p>
        <div className="py-8 text-center">
          <MainStrongText>
            There will be many of them, for they are numerous, for they are
            everywhere
          </MainStrongText>
        </div>
        <p className="flex flex-col justify-center gap-3 dark:text-ivory">
          <span>
            <span className="lea float-left mr-2 font-fondamento  text-5xl text-red-magic">
              Y
            </span>
            es, dear Slavs. Once upon a time, countless stories were told about
            them. In ancient times, bestiaries were eagerly filled with
            information about our fellow inhabitants of Slavic lands. But for
            some time now, it seems that a silence has fallen. It appears that
            man, convinced of his dominance, has ceased to notice all these
            neighbors of ours, just as we are entangled in the cycle of time,
            life, death, eternal rebirth, and daily problems. And so, with sweat
            on our brows, labor, and toil, the New Slavic Census is being
            created. A trio of amateur researchers, inspired scientists, full of
            passion and vigor, has decided to take a closer look at those who
            still dwell on these lands with us. It won&apos;t be an easy task;
            there is much work ahead of us. But with your invaluable help and
            support, we will discover and get to know all those whom the
            darkness of oblivion has shrouded. Let&apos;s get to work!
          </span>
        </p>
        <img
          className=" my-8 rounded-full shadow-hero md:my-16  md:w-auto"
          src="/images/neo-slavic-census-about/neo-slavic-census-book.jpg"
          alt=""
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-[5rem] md:gap-[8rem]">
        <SectionMain>
          <MainTitlesWrapper>
            <MainStrongText>Neo-slavic Illustrations:</MainStrongText>
          </MainTitlesWrapper>

          <IllustrationsGrid
            products={neoSlavicProducts}
            colNum={4}
            isLoading={isLoadingNeoSlavic}
            error={errorNeoSlavic}
            aspectRatio="4/5"
          />
        </SectionMain>

        <SectionMain color="second">
          <MainTitlesWrapper>
            <MainStrongText>Neo-slavic Products:</MainStrongText>
          </MainTitlesWrapper>
          <ProductsGrid
            products={neoSlavicProducts}
            hideVariations={false}
            isLoading={isLoadingNeoSlavic}
            error={errorNeoSlavic}
          />
        </SectionMain>

        <SectionMain>
          <MainTitlesWrapper>
            <MainStrongText>Neo-slavic Animations:</MainStrongText>
          </MainTitlesWrapper>
          {ytSearchLoading ? (
            <Spinner />
          ) : ytSearchError ? (
            <Message
              variant="bad"
              message={getError(ytSearchError as ApiError)}
              // message={ytSearchError.data.message}
            />
          ) : (
            ytSearch && <LatestVideos youtubeItems={ytSearch.items} />
          )}
        </SectionMain>
      </div>
    </div>
  );
};
export default NeoSlavicCensus;
