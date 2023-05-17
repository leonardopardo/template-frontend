import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactTyped from 'react-typed';

const exampleCode = `<ReactTyped
  strings={["Here you can find hardware", "Here you can find software", "Here you can find net tools"]}
  typeSpeed={50}
  backSpeed={50}
  backDelay={1}
  className="font-weight-bold px-2 fs-4 text-success"
  loop
  smartBackspace
/>`;

const TypedText = () => (
  <>
    <PageHeader
      title="Typed Text"
      description="Falcon-React uses <strong>react-typed</strong> for text typing animation. <strong>react-typed</strong> is a react component that wraps up the <strong>Typed.js</strong>. <strong>Typed.js</strong> is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set."
      className="mb-3"
    >
      <Button
        href="https://github.com/ssbeefeater/react-typed"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        react-typed Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ ReactTyped }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default TypedText;
