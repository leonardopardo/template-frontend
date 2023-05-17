import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';

const Styling = () => (
  <>
    <PageHeader title="Styling" className="mb-3">
      <p className="mt-2 mb-0">
        We recommend you customize your theme styles using the user style files.
        You can customize the theme’s styles with the following approaches:
      </p>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Edit SCSS" light={false} noPreview />
      <FalconComponentCard.Body>
        <p>
          You can add your own SCSS and override the theme style in the{' '}
          <code>_user.scss</code> file.
        </p>
        <p className="mb-0">
          To make broader changes to the design of the theme, such as changing
          the color scheme or font sizes, use{' '}
          <code>src/assets/scss/_user-variables.scss</code>. Any variable from{' '}
          <code>node_modules/bootstrap/scss/_variables.scss</code> or{' '}
          <code>src/assets/scss/theme/_variables.scss</code> can be overridden
          with your own value.
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Compiling SCSS"
        light={false}
        noPreview
      />
      <FalconComponentCard.Body>
        <p>
          Run <code>npm run build:css</code> command in your project directory
          to compile scss. This will compile all the SCSS files from{' '}
          <code>src/assets/scss/</code> directory and generate{' '}
          <code> theme.min.css </code>,<code> theme-rtl.min.css </code>,{' '}
          <code> user.min.css </code> <code> user-rtl.min.css </code>files in{' '}
          <code>public/css/</code> directory. Reload your browser to see the
          changes.
        </p>
        <p>
          <strong>
            You can also use the SCSS watcher to automatically compile and
            reload your browser every time you save your SCSS files by running
            the command
          </strong>
          <code> npm run watch:css </code>
          <strong> in a separate terminal window while running</strong>{' '}
          <code>npm start</code> <strong> in another.</strong>
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default Styling;
