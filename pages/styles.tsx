import { styled } from "@stitches/react"
import { PrimaryButton, AccentButton, NeutralButton } from "../styles/commonStyles"
import Head from "next/head"
import Link from "next/link"

export default function Styles() {
	return (
		<div>
			<Head>
				<title>Stashpad</title>
				<meta name="description" content="Notes Reimagined" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>hello</h1>
				<h2>hello</h2>
				<h3>hello</h3>
				<h4>hello</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
					nemo vero alias.
				</p>
				<Link href="/">Test Link</Link>
				<ul>
					<li>listItem</li>
					<li>listItem</li>
					<li>listItem</li>
					<li>listItem</li>
					<li>listItem</li>
				</ul>
        <Accent2/>
        <Accent/>
        <Primary2/>
        <Primary/>
        <Dark2/>
        <Dark/>
        <Light2/>
        <Light/>
				<PrimaryButton>Click Here</PrimaryButton>
				<AccentButton>Click Here</AccentButton>
				<NeutralButton>Click Here</NeutralButton>
			</main>
		</div>
	)
}

const ColorDiv = styled('div', {
  height: '45px',
  width: '45px',
  borderRadius: '50%',
})

const Accent = styled(ColorDiv, {
  backgroundColor: '$accent100'
})
const Accent2 = styled(ColorDiv, {
  backgroundColor: '$accent200'
})
const Primary = styled(ColorDiv, {
  backgroundColor: '$primary100'
})
const Primary2 = styled(ColorDiv, {
  backgroundColor: '$primary200'
})
const Dark = styled(ColorDiv, {
  backgroundColor: '$dark100'
})
const Dark2 = styled(ColorDiv, {
  backgroundColor: '$dark200'
})
const Light = styled(ColorDiv, {
  backgroundColor: '$light100'
})
const Light2 = styled(ColorDiv, {
  backgroundColor: '$light200'
})
