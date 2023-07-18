interface ISkillPill {
  skill: string;
}
const SkillPill = (props: ISkillPill) => {
  const { skill } = props;

  return (
    <span className='rounded-full bg-teal-500 px-3 py-1 m-2'>{skill}</span>
  );
};

export default SkillPill;
