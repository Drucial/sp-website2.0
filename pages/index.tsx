import { styled } from "@stitches/react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<Head>
				<title>Stashpad</title>
				<meta name="description" content="Notes Reimagined" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

				<HeroSection>
          <h1>Notes Reimagined</h1>
        </HeroSection>
		</>
	)
}

const HeroSection = styled('section', {

})
