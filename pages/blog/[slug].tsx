import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import client from "../../client";
import { IsMobileState } from "../../state/atoms";
import { Posts } from "../../typings";

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source);
}

// const ptComponents = {
//   types: {
//     image: ({ value }) => {
//       if (!value?.asset?._ref) {
//         return null;
//       }

//       return (
//         <div style={{ margin: "20px 0" }}>
//           <Image
//             alt={value.alt || " "}
//             loading="lazy"
//             src={urlFor(value).height(750).fit("min").auto("format")}
//             width={500}
//             height={300}
//             style={{ maxHeight: 500 }}
//           />
//         </div>
//       );
//     },
//   },
// };

interface Props {
  post: Posts;
}

const Post = ({ post }: Props) => {
  // const {
  //   slug,
  //   title,
  //   headline = "Missing headline",
  //   subtitle = "Missing subtitle",
  //   publishedAt,
  //   name = "Missing name",
  //   picture,
  //   name2,
  //   picture2,
  //   mainImage,
  //   category,
  //   snippet,
  //   body = [],
  // } = post;

  // console.log(post);

  // const url = `/blog/${slug.current}`;
  // const isMobile = useRecoilValue(IsMobileState);
  return (
    <main>
      {/* <div className="container">
        <article className={styles.article}>
          <header className={styles.blogHead}>
            <div className={styles.topLine}>
              <p>
                <label className="sectionLabel">{category}</label>
                <span> | </span>
                {moment(publishedAt).format("LL")}
              </p>
              {!isMobile && (
                <Link href="../blog">
                  <a>More posts &rarr;</a>
                </Link>
              )}
            </div>
            <div className={styles.title}>
              <h1 className={styles.headline}>{headline}</h1>
              <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
            <div className={styles.bottomLine}>
              <div className={styles.authorContainer}>
                <div className={styles.author}>
                  <picture>
                    <img
                      src={urlFor(picture).width(150).fit("max").auto("format")}
                      alt={name}
                    />
                  </picture>
                  <p>{name}</p>
                </div>
                {name2 ? (
                  <div className={styles.author}>
                    <picture>
                      <img
                        src={urlFor(picture)
                          .width(150)
                          .fit("max")
                          .auto("format")}
                        alt={name}
                      />
                    </picture>
                    <p>{name}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <ShareIcons
                url={url}
                title={headline}
                subtitle={subtitle}
                className={styles.shareIcons}
              />
            </div>
          </header>
          <div className={styles.imageWrapper}>
            <picture>
              <source
                srcSet={urlFor(mainImage)
                  .height(700)
                  .width(1300)
                  .fit("max")
                  .format("webp")}
                type="image/webp"
              />
              <source
                srcSet={urlFor(mainImage)
                  .height(700)
                  .width(1300)
                  .fit("max")
                  .format("jpg")}
                type="image/jpeg"
              />
              <Image
                src={urlFor(mainImage)
                  .height(700)
                  .width(1300)
                  .fit("max")
                  .auto("format")}
                alt={title}
                width={1250}
                height={675}
              />
            </picture>
            <div className={styles.att}>{mainImage.attribution}</div>
          </div>
          <div className={styles.contentWrapper}>
            <PortableText value={body} components={ptComponents} />
          </div>
        </article>
      </div>
      <BottomSectionCta /> */}
    </main>
  );
};

// const query = groq`*[_type == "post" && slug.current == $slug][0]{
//   slug,
//   title,
//   headline,
//   subtitle,
//   publishedAt,
//   mainImage,
//   "name": author->name,
//   "picture": author->image,
// 	"name2": coauthor->name,
//   "picture2": coauthor->image,
//   "category": categories[0]->title,
//   body,
// 	snippet,
// }`;

// const slugQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

// export async function getStaticPaths() {
//   const response = await client.fetch(slugQuery);
//   const paths = response.map((slug: string) => ({
//     params: { slug },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const post = await client.fetch(query, {
//     slug: params.slug,
//   });
//   return {
//     props: {
//       post,
//     },
//   };
// }

export default Post;
