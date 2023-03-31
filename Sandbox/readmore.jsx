{/* {
                  aboutShow ? (aboutShow) : show.about
              } */}
{/* {readMore ? `${text.slice(0, 280)}` : text}
              {
                text.length > 280 && (
                    <Small onClick={handleRemore}>
                        {readMore ? "...Read more" : "...Show less"}
                    </Small>
                )
              } */}
const [fulltext, setFulltext] = useState("")
const [shortText, setShortText] = useState("")
const handleText = (text) => {
    if (text) {
        setShortText(text.slice(0, 280));
        setFulltext(text);
    }
}
