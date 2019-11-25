import styled from 'styled-components'
import { Label } from '../../components/shared/Label/styled'
import { Heading } from '../../components/shared/Heading/styled'
import { Body } from '../../components/homepage/Body/styled'

export const HomepageSection01 = styled.section`

  ${Label} {
    margin: 3.5rem 0 0;

    @media (min-width: 48rem) {
      margin: 5.125rem 0 0;
    }
  }

  ${Heading} {
    margin: 3.5rem 0 0;

    @media (min-width: 48rem) {
      margin: 7rem 0 0;
    }
  }

  ${Body} {
    margin: 4rem 0 0;

    @media (min-width: 48rem) {
      margin: 4.375rem 0 0;
    }
  }
`
