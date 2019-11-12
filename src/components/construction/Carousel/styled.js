import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Carousel = styled.div`

`

export const CarouselItem = styled.div`
  width: 100%:
`

export const CarouselItemText = styled.div`
  margin: 2rem 1.875rem 0;
  padding: 3.5rem 0;
  position: relative;

  ::after {
    background-color: ${colors.grey};
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    top: 0;
    width: 2rem;
  }

  @media (min-width: 48rem) {
    margin: 0;
    padding: 4rem 0 0;
    text-align: left;
  }
`

export const CarouselItemHeading = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2;
  margin: 0 0 2rem;
  text-align: left;
`

export const CarouselItemSubheading = styled.p`
  font-size: .9375rem;
  margin: 0 0 2rem;
  text-align: left;
`

export const CarouselControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 1.875rem;

  @media (min-width: 48rem) {
    margin: 6rem 0 0;
  }
`

export const CarouselDots = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const CarouselDot = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  height: 1.25rem;
  justify-content: center;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 2.25rem;
  z-index: 1;

  ::after,
  ::before {
    background-color: ${colors.grey};
    border-radius: 50%;
    content: '';
    height: .5rem;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: .5rem;
  }

  ::after {
    background-color: ${colors.red};
    opacity: ${({ isCurrent }) => isCurrent ? '1' : '0'};
    transition: opacity .15s linear;
  }
`

export const CarouselArrow = styled.button`
  background: transparent;
  border: 0;
  color: currentcolor;
  height: 30px;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 50px;

  ::before {
    border-color: ${colors.grey} ${colors.grey} transparent transparent;
    border-style: solid;
    border-width: .125rem .125rem 0 0;
    content: '';
    height: 1rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(4px, -50%) rotate(-135deg);
    width: 1rem;
  }

  ::after {
    background-color: ${colors.grey};
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-22px);
    width: 28px;
  }
`

export const CarouselArrowRight = styled(CarouselArrow)`
  transform: scaleX(-1);
`

export const CarouselArrowLeft = styled(CarouselArrow)`
`
