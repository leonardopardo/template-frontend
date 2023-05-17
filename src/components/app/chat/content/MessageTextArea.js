import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Picker } from 'emoji-mart';
import AppContext, { ChatContext } from 'context/Context';
import { getColor } from 'helpers/utils';
import 'emoji-mart/css/emoji-mart.css';
import TextareaAutosize from 'react-textarea-autosize';

const formatDate = date => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  const now = date
    .toLocaleString('en-US', options)
    .split(',')
    .map(item => item.trim());

  return {
    day: now[0],
    hour: now[3],
    date: now[1] + ', ' + now[2]
  };
};

const MessageTextArea = () => {
  const {
    messagesDispatch,
    messages,
    threadsDispatch,
    currentThread,
    setScrollToBottom,
    isOpenThreadInfo
  } = useContext(ChatContext);
  const [previewEmoji, setPreviewEmoji] = useState(false);
  const [message, setMessage] = useState('');

  const {
    config: { isDark, isRTL }
  } = useContext(AppContext);

  const addEmoji = e => {
    let emoji = e.native;
    setMessage(message + emoji);
    setPreviewEmoji(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    let newMessage = {
      senderUserId: 3,
      message: `${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}`,
      status: 'delivered',
      time: formatDate(date)
    };

    const { content } = messages.find(
      ({ id }) => id === currentThread.messagesId
    );

    if (message) {
      messagesDispatch({
        type: 'EDIT',
        payload: {
          id: currentThread.messagesId,
          content: [...content, newMessage]
        },
        id: currentThread.messagesId
      });

      threadsDispatch({
        type: 'EDIT',
        payload: currentThread,
        id: currentThread.id,
        isUpdatedStart: true
      });
    }
    setMessage('');
    setScrollToBottom(true);
  };

  useEffect(() => {
    if (isOpenThreadInfo) {
      setPreviewEmoji(false);
    }
  }, [isOpenThreadInfo]);

  return (
    <Form className="chat-editor-area" onSubmit={handleSubmit}>
      <TextareaAutosize
        minRows={1}
        maxRows={6}
        value={message}
        placeholder="Type your message"
        onChange={({ target }) => setMessage(target.value)}
        className="form-control outline-none resize-none rounded-0 border-0 emojiarea-editor"
      />

      <Form.Group controlId="chatFileUpload">
        <Form.Label className="chat-file-upload cursor-pointer">
          <FontAwesomeIcon icon="paperclip" />
        </Form.Label>
        <Form.Control type="file" className="d-none" />
      </Form.Group>

      <Button
        variant="link"
        className="emoji-icon"
        onClick={() => setPreviewEmoji(!previewEmoji)}
      >
        <FontAwesomeIcon
          icon={['far', 'laugh-beam']}
          onClick={() => setPreviewEmoji(!previewEmoji)}
        />
      </Button>

      {previewEmoji && (
        <Picker
          set="google"
          onSelect={addEmoji}
          sheetSize={20}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: isRTL ? '2%' : 'auto',
            right: isRTL ? 'auto' : '2%',
            padding: 0,
            zIndex: 1,
            backgroundColor: getColor('100')
          }}
          theme={isDark ? 'dark' : 'light'}
          showPreview={false}
          showSkinTones={false}
        />
      )}

      <Button
        variant="send"
        size="sm"
        className={classNames({
          'text-primary': message.length > 0
        })}
        type="submit"
      >
        Send
      </Button>
    </Form>
  );
};

MessageTextArea.propTypes = {
  thread: PropTypes.object
};

export default MessageTextArea;
