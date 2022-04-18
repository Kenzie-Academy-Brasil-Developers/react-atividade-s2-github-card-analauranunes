import { DivStyle } from "./style";

export const Card = ({ repos }) => {
  return (
    <DivStyle>
      {repos.map((repo, index) => (
        <div className="card-div" key={index}>
          <div>
            <img src={repo.owner.avatar_url} alt={repo.name} />
          </div>
          <div className="infoCard-div">
            <a href={repo.html_url} target="blank">
              {repo.full_name}
            </a>
            <p>{repo.description}</p>
          </div>
        </div>
      ))}
    </DivStyle>
  );
};
