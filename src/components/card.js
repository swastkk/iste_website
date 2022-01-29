import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

const BannerImage = styled(Image)`
  width: 400px;
  height: 300px;

  img {
    margin: 0;
  }
  @media only screen and (max-width: 786px) {
    width: 100%;
    height: 200px;
  }
`

const CardDiv = styled.div`
 
  width: 100%;
  overflow: hidden;
  margin: 0 1% 2%;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(10, 10, 10, 0.5);
  transition: 0.2s ease-out;
  .Links {
    display: flex;
    @media only screen and (max-width: 1536px) {
      display:block;
      border-radius:0 0 20px 20px;
    }
  }
  .text {
    display: flex;
    background: rgba(4, 39, 212, 0.5);
    flex: none;
    width: 60%;
    border-radius: 20px;
    box-shadow: 0 20px 20px rgba(10, 20, 10, 0.5);
    @media only screen and (max-width: 1536px) {
      width:100%;
      border-radius:20px 20px 0 0;
    }
  }
  .header {
    margin: auto;
    color: white;
    width: 50%;
    .title {
      font-size: xx-large;
      font-weight: 400;
      @media screen and (max-width:1006px){
        font-size:3vw;
      }
    }
  }

  .tags {
    color: white;
    display: flex;
    width: max-content;
    .tag {
      background-image: linear-gradient(45deg, rgba(34,137,195,1) 25%, rgba(203,125,94,1) 86%);
      border-radius: 20px;
      margin: 5px;
      padding: 10px;
      min-width: 50px;
      text-align: center;
      @media screen and (max-width:1108px){
        font-size:1.2vw;
        padding:5px;
      }
    @media screen and (max-width:500px){
      border-radius:5px;
      font-size:2vw;
    }
    }
  }

  .excerpt {
    color: white;
    text-align: justify;
    font-size:25px;
    padding:40px 20px 40px 20px;
    background: rgba(4, 39, 212, 0.2);
    border-radius:20px;
    @media screen and (max-width:1536px){
      border-radius: 0 0 20px 20px;
      font-size:2.5vw;
    }
    @media screen and (max-width:500px){
      border-radius: 0 0 20px 20px;
      font-size:4vw;
    }
  }
  &:hover {
    transform: translateY(-2%);
    transition: 0.2s ease-out;
  }
`

const Card = ({ frontmatter, excerpt, slug }) => {
  return (
    <CardDiv>
      <Link to={slug} style={{ textDecoration: "none" }} className="Links">
        <div className="text">
          {frontmatter.featuredImage.childImageSharp && (
            <BannerImage
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              alt="Banner Image"
            />
          )}
          <div className="header">
            <div className="title">{frontmatter.title}</div>
            <div className="date">{frontmatter.date}</div>
            <div className="tags">
              {frontmatter.tags.map(tag => (
                <Link
                  to={"/tags/" + kebabCase(tag)}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="tag">{tag}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="excerpt">{excerpt}<a>Read More</a></div>
      </Link>
    </CardDiv>
  )
}

export default Card
