/*

import React, { useState } from 'react';
import './style.css';

const Modal = ({ url, onClose }) => {
  return (
    <div>
      <p>MODAL</p>
      <p>URL: {url}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const List = ({ items, onSelect }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.large} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

const ListItem = ({ item, onSelect }) => {
  return <div onClick={() => onSelect(item.large)}>{item.large}</div>;
};

const App = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [images, setImages] = useState([
    { preview: 'preview-1', large: 'large-1' },
    { preview: 'preview-2', large: 'large-2' },
    { preview: 'preview-3', large: 'large-3' },
  ]);

  return (
    <div>
      <div>
        {images.map((image) => (
          <div key={image.large}>{image.large}</div>
        ))}
      </div>
      <List items={images} onSelect={setSelectedImageUrl} />
      {selectedImageUrl && (
        <Modal
          url={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </div>
  );
};

export default App;
*/

import React, { useState } from 'react';
import './style.css';

const Modal = ({ url, onClose }) => {
  return (
    <div>
      <p>MODAL</p>
      <p>URL: {url}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.large} item={item} />
      ))}
    </div>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsModalOpen(true)}>{item.large}</div>
      {isModalOpen && (
        <Modal url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

const App = () => {
  const [images, setImages] = useState([
    { preview: 'preview-1', large: 'large-1' },
    { preview: 'preview-2', large: 'large-2' },
    { preview: 'preview-3', large: 'large-3' },
  ]);

  return (
    <div>
      <List items={images} />
    </div>
  );
};

export default App;
