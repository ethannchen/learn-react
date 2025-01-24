import React from 'react';

interface ListItemProps {
  label: string;
  value: string | number | string[];
}

function ListItem({ label, value }: ListItemProps) {
  const displayValue = Array.isArray(value) ?
    `${value.length} (${value.join(', ')})` :
    value;

  return (
    <li>
      <b>{label}: </b>
      {displayValue}
    </li>
  );
}

interface ProfileProps {
  name: string;
  imageSrc: string;
  profession: string;
  awards: string[];
  discovered: string;
}

function Profile({
  name,
  imageSrc,
  profession,
  awards,
  discovered
}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <ListItem label="Profession" value={profession} />
        <ListItem label="Awards" value={awards} />
        <ListItem label="Discovered" value={discovered} />
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageSrc='https://i.imgur.com/szV5sdGs.jpg'
        profession="physicist and chemist"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discovered="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageSrc='https://i.imgur.com/YfeOqp2s.jpg'
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}