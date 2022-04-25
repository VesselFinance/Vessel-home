import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import linkIcon from '../../../assets/svgs/link.svg';
import SSTarrow from '../../../assets/images/uiButtons/double-arrow-up.svg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollToTop from 'react-scroll-to-top';

import { useEffect } from 'react';

const PageWrapper = styled.div`
	padding: 0 10px 64px 10px;
	max-width: 1560px;
	margin: 0 auto;
	height: 100%;
	background-color: transparent;
	position: relative;
	overflow: hidden;
	@media ${bp.sm} {
		position: relative;
	}
	@media ${bp.xl} {
		position: relative;
		max-height: 100%;
	}
`;

const AboutSection = styled.section`
	display: flex;
	justify-content: space-between;
	border-radius: 50px;
	position: relative;
	margin-top: -70px;
	background-color: transparent;
`;

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 48px 24px 0 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
`;

const AboutSectionFirstHeader = styled.h1`
	max-width: 700px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 50px;
	}
`;

const AboutSectionHeader = styled.h1`
	max-width: 700px;
	margin-left: 30px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 50px;
		margin-left: 0px;
	}
`;

const AboutImageParent = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 400px;
		align-items: center;
		display: flex;
	}
`;

const AboutPara = styled.p`
	color: ${theme.color.text.secondary};
	max-width: 700px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
	}
`;

const AboutWrapperTextLeft = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
`;

const AboutWrapperTextRight = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		justify-content: space-between;
	}
`;

const AboutTextWrapperContainer = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const SSTimg = styled.img`
	width: 30px;
`;

const BackgroundBlurLeft = styled.img`
	left: -30%;
	opacity: 30%;
	position: absolute;
	z-index: -1;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		left: -5%;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		left: -1%;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BackgroundBlurRight = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 30%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BoxContentWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 28px;
	grid-row-gap: 28px;
	margin: 20px;
	@media ${bp.sm} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${bp.md} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${bp.lg} {
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${bp.xl} {
		grid-template-columns: repeat(3, 1fr);
	}
	&:hover {
		cursor: pointer;
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	width: 80vw;
	max-width: 450px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		width: 36vw;
		max-width: 410px;
	}
	@media ${bp.lg} {
		width: 24vw;
	}
	@media ${bp.xl} {
		width: 24vw;
		max-width: 410px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 24px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const BoxIcon = styled.img`
	width: 20px;
	filter: invert(1);
`;

const AboutSectionHero = styled.section`
	display: flex;
	justify-content: space-between;
	border-radius: 50px;
	position: relative;
	background-color: transparent;
	margin-top: -70px;
	margin-bottom: -50px;
	@media ${bp.sm} {
		margin-top: -50px;
		margin-bottom: 0px;
	}
`;
const DocumentationPage = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, []);

	return (
		<>
			<ScrollToTop
				smooth
				width="480"
				height="480"
				color="#ffffff"
				style={{
					'background-color': 'transparent',
					'box-shadow': 'none',
					zIndex: 9999,
					transition: 'opacity 1s ease-in-out',
					'&:active': {
						visibility: 'visible',
						transition: 'opacity 1s ease-in-out',
						opacity: '1',
					},
				}}
				component={<SSTimg src={SSTarrow} alt="sst" />}
			/>
			<PageWrapper>
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
					<AboutSectionHero>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent></AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionFirstHeader>Documentation</AboutSectionFirstHeader>
									<AboutPara>
										Transparency and trust are of utmost importance, which is why all documentation
										and code is open source and accessible to anyone at any time.
									</AboutPara>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSectionHero>
				</AnimationOnScroll>

				<BackgroundBlurRight src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Papers</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent
											onClick={e => {
												e.preventDefault();
												window.open('/Vessel_Yellowpaper.pdf');
											}}
										>
											<BoxHeader>
												Yellowpaper
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											A technical document outlining the mathematics and algorithms running the
											Vessel contract.
										</BoxContent>
										<BoxContent
											onClick={e => {
												e.preventDefault();
												window.open('/Vessel_Whitepaper.pdf');
											}}
										>
											<BoxHeader>
												Whitepaper
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											A general document of the Vessel Contract, it's proposal and it's vision.
										</BoxContent>
										<BoxContent
											onClick={e => {
												e.preventDefault();
												window.open(
													'https://vessel-protocol.gitbook.io/vessel-whitepaper/',
													'_blank',
												);
											}}
										>
											<BoxHeader>
												Gitbook
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											An introduction and overview of Vessel Protocol, adapted from the Vessel
											whitepaper.
										</BoxContent>
									</BoxContentWrapper>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={blueGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Links</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent
											onClick={e => {
												e.preventDefault();
												window.open('https://github.com/VesselFinance/', '_blank');
											}}
										>
											<BoxHeader>
												Github
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											View our contract code right from the source.
										</BoxContent>
										<BoxContent>
											<BoxHeader>
												Discord
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											[coming soon] - Join the community to ask questions, read updates and more.
										</BoxContent>
										<BoxContent>
											<BoxHeader>
												Audit
												<BoxIcon src={linkIcon} />
											</BoxHeader>
											[coming soon] - Access our audit certificate and documentation.
										</BoxContent>
									</BoxContentWrapper>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default DocumentationPage;
