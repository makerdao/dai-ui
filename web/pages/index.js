import Link from 'next/link';
import Head from '../components/head';
import styled, { css } from '@emotion/primitives';

import { helpers as h, spacingScale } from '../styles';

const Section = styled.View({
  ...h.spacing.ma.l
});

const Text = styled.Text();

export default () => (
  <div>
    <Head title="MakerDAO Styleguide" />
    <Section
      style={{
        ...h.flex.center,
        ...h.spacing.height.full
      }}
    >
      <Text>Howdy </Text>
    </Section>
  </div>
);
