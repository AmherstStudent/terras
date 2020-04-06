
import Link from 'next/link'
import styled from 'styled-components'

export const formatDate = (date: string) => {
    let updatedDate = new Date(date);
    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = updatedDate.toLocaleDateString("en-US", options);
    return formattedDate;
}

const AuthorName = styled.a`
font-family: Halyard Text;
font-style: normal;
font-weight: bold;
line-height: 150%;
color: #595959;
text-decoration: none;
text-transform: capitalize;
`

const AuthorNameLink = (author) => {
    return (<Link key={author.id} href={{pathname:"/author", query: {id: author.id}}} as={"/author/" + author.id } passHref>
      <AuthorName>{author.display_name}{",  "}</AuthorName>
    </Link>)
}

export const AuthorNames = ({authors}) => (authors?.map((author) => {
    return (<AuthorNameLink {...author} />)}))


