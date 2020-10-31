export const data = {
  link: "custom-syntax-highlighting",
  title: "Custom syntax highlighting",
  author: "[Cursors]",
  content: [
    {
      type: "text",
      content:
        "A few hours of work later and this is the result. Almost flawless syntax highlighting for my posts. The algorithm that does it is no secret as it is on github.",
    },
    {
      type: "text",
      content: "First up is HTML:",
    },
    {
      type: "code",
      content: `<h1
    class="hello" 
    id="world"
>
    &lt;hello world&gt;
</h1>`,
      lang: "html",
    },
    {
      type: "text",
      content:
        "This was probably the simplest; only needed to check for tags and attributes. I also added escape code highlighting for extra flair. Let's see CSS next.",
    },
    {
      type: "code",
      content: `h1.hello {
    font-size: 4rem;
}`,
      lang: "css",
    },
    {
      type: "text",
      content:
        "Not bad, I took classes, ids and pseudo classes and elements into account as well. It was certainly interesting to program this. JavaScript syntax highlighting would prove to be the most challenging.",
    },
    {
      type: "code",
      content: `console.log("hello world");
/* comment */`,
      lang: "js",
    },
    {
      type: "text",
      content:
        "I had a lot of fun making these syntax highlighters. At times it could be frustrating, but when you get the logic right and everything just works, it's fantastic, but hey, that's programming.",
    },
    {
      type: "text",
      content: "Bye, until next time!",
    },
  ],
  createdAt: "Oct 30, 2020",
};
