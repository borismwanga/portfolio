import React from 'react';
/* import { Card, div } from '@/components/ui/card'; */
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const MiniCv = () => {
  const skills = {
    hardSkills: [
      'Ruby', 'SQL', 'Rails', 'HTML/CSS/Bootstrap', 
      'JavaScript (ES6)', 'StimulusJS', 'NodeJS', 'ReactJS', 
      'MongoDB', 'Figma', '3rd-party services'
    ],
    softSkills: [
      'Product mindset', 'UX/UI basics',
      'Communication & pitch skills',
      'Collaboration workflows with git/Github'
    ]
  };

  const experience = [
    {
      title: 'Production Operator',
      company: 'General Waffel Manufactory, Brussel',
      period: '2019 - 2022',
      achievements: [
        'Monitored and maintained production equipment, increasing efficiency by 20%',
        'Executed quality checks on over 1000 waffles daily',
        'Led implementation of new production scheduling system'
      ]
    },
    {
      title: 'Junior Help Desk',
      company: 'Clinique Saint Jean, Brussel',
      period: '2017 - 2019',
      achievements: [
        'Provided technical support to 500+ end-users',
        'Documented support interactions, reducing follow-up by 50%',
        'Conducted hardware and software inventory checks'
      ]
    },
    {
      title: 'Steward',
      company: 'Kinepolis Group, Brussel',
      period: '2014 - 2016',
      achievements: [
        'Engaged with 100+ customers daily, 98% satisfaction rating',
        'Orchestrated 500+ tasks weekly with 100% accuracy',
        'Coordinated with team of 20 stewards'
      ]
    }
  ];

  const languages = ['French', 'Dutch', 'English'];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Boris_Mwanga_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full font-appelGarmond">
      <div className="absolute top-0 right-0 p-4 z-50">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download size={16} />
          Download PDF
        </Button>
      </div>
      <div className='flex justify-between w-full'>
      <div className="w-1/2">
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className=" mb-2">Hard Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.hardSkills.map((skill) => (
                  <span key={skill} className="border px-2 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill) => (
                  <span key={skill} className="border px-2 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <div className="flex gap-4">
            {languages.map((language) => (
              <span key={language} className="border px-2 py-1 rounded-md text-sm px-4 py-2 rounded-lg">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className='w-1/2'>
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.title} className="border-b last:border-b-0 pb-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                {/* <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700">{achievement}</li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      

      
    </div>
  );
};

export default MiniCv;