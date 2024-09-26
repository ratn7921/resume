import styled from 'styled-components';

const SkillTag = styled.li`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: bold;
    background-image: url('/path/to/your-image.gif'); /* Update this accordingly */
`;

function Skills() {
    return (
        <ul className="flex flex-wrap gap-4 mb-6">
            <SkillTag>C/C++</SkillTag>
            {/* Repeat for other skills */}
        </ul>
    );
}
