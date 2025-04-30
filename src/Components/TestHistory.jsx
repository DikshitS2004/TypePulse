import React from 'react';
import { Award } from 'lucide-react';
import themeClasses from '../Constants/themeClasses';

function TestHistory({ completedTests, theme }) {
  if (completedTests.length === 0) {
    return null;
  }

  return (
    <div className={`${themeClasses.card[theme]} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Award className="w-5 h-5 mr-2" /> Test History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-opacity-20">
              <th className="py-2 text-left">Test #</th>
              <th className="py-2 text-left">WPM</th>
              <th className="py-2 text-left">Accuracy</th>
              <th className="py-2 text-left">Time (s)</th>
            </tr>
          </thead>
          <tbody>
            {completedTests.map((test, index) => (
              <tr key={index} className="border-b border-opacity-10">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{test.wpm}</td>
                <td className="py-2">{test.accuracy}%</td>
                <td className="py-2">{test.timeSpent}s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestHistory;