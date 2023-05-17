import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import heart from 'assets/img/animated-icons/heart.json';
import checkPrimaryLight from 'assets/img/animated-icons/check-primary-light.json';
import warningLight from 'assets/img/animated-icons/warning-light.json';
import infiniteLoop from 'assets/img/animated-icons/infinite-loop.json';
import loading from 'assets/img/animated-icons/loading.json';
import loadingSquare from 'assets/img/animated-icons/loading-square.json';
import shoppingList from 'assets/img/animated-icons/shopping-list.json';
import starFeedback from 'assets/img/animated-icons/star-feedback.json';
import sleeping404 from 'assets/img/animated-icons/sleeping-404.json';
import Lottie from 'react-lottie';

const exampleCode = `function Animated (){
  const heartOptions = {
    loop: true,
    autoplay: true,
    animationData: heart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const checkPrimaryLightOptions = {
    loop: true,
    autoplay: true,
    animationData: checkPrimaryLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const warningLightOptions = {
    loop: true,
    autoplay: true,
    animationData: warningLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Row className="align-items-center">
      <Col lg={4}>
        <Lottie options={checkPrimaryLightOptions} width="120px" height="120px" />
      </Col>
      <Col lg={4}>
        <Lottie options={warningLightOptions} width="130px" height="130px" />
      </Col>
      <Col lg={4}>
        <Lottie options={heartOptions} width="220px" height="220px" />
      </Col>
    </Row>
  );
};`;

const loadingCode = `function Animated (){
  const infiniteLoopOptions = {
    loop: true,
    autoplay: true,
    animationData: infiniteLoop,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const loadingSquareLightOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingSquare,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Row className="align-items-center">
      <Col lg={4}>
        <Lottie options={infiniteLoopOptions} width="120px" height="120px" />
      </Col>
      <Col lg={4}>
        <Lottie options={loadingSquareLightOptions} width="130px" height="130px" />
      </Col>
      <Col lg={4}>
        <Lottie options={loadingOptions} width="220px" height="220px" />
      </Col>
    </Row>
  );
};`;

const featuredAnimationCode = `function Animated (){
  const shoppingListOptions = {
    loop: true,
    autoplay: true,
    animationData: shoppingList,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const sleeping404Options = {
    loop: true,
    autoplay: true,
    animationData: sleeping404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const starFeedbackOptions = {
    loop: true,
    autoplay: true,
    animationData: starFeedback,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Row className="align-items-center">
      <Col lg={4}>
        <Lottie options={shoppingListOptions} width="120px" height="120px" />
      </Col>
      <Col lg={4}>
        <Lottie options={sleeping404Options} width="130px" height="130px" />
      </Col>
      <Col lg={4}>
        <Lottie options={starFeedbackOptions} width="220px" height="220px" />
      </Col>
    </Row>
  );
};`;

const AnimatedIcons = () => (
  <>
    <PageHeader
      title="Animated Icons"
      description="Falcon uses <strong>React Lottie</strong> for animated icons. <strong>React Lottie</strong> render After Effects animations natively in React.js"
      className="mb-3"
    >
      <Button
        href="https://github.com/chenqingspring/react-lottie"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Lottie Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false}>
        <p className="mb-0">
          You can update colors, animation duration, and other stuff from this
          excellent editor.
        </p>
        <Button
          href="https://lottiefiles.com/editor"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Lottie Editor
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ Lottie, heart, checkPrimaryLight, warningLight }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Loading Animation Example"
        light={false}
      >
        <Button
          href="https://lottiefiles.com/loading"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Get More Animation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={loadingCode}
        scope={{ Lottie, infiniteLoop, loading, loadingSquare }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Featured Animation Example"
        light={false}
      >
        <Button
          href="https://lottiefiles.com/featured"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Get More Animation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={featuredAnimationCode}
        scope={{ Lottie, sleeping404, shoppingList, starFeedback }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default AnimatedIcons;
