import React, { useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const example = [
  [59],
  [73, 101],
  [52, 40, 9],
  [26, 53, 6, 34],
  [10, 51, 87, 86, 81],
  [61, 95, 66, 57, 25, 68],
  [90, 81, 80, 38, 92, 67, 73],
  [30, 28, 51, 76, 81, 18, 75, 44],
  [84, 14, 95, 87, 62, 81, 17, 78, 58],
  [21, 46, 71, 58, 2, 79, 62, 39, 31, 9],
];

const TriangleTree = () => {
  const [tree, setTree] = useState(example);
  const [result, setResult] = useState(0);
  const treeRef = useRef();

  const getMaxPathLength = (data, x, y) => {
    let treePaths = [...data].map((item) => {
      return [...item, ...Array([...data].length - 1).fill(0)];
    });
    let maxPaths = [...data].map((item) => {
      return [
        ...Array([...data].length - 1).fill(0),
        ...Array([...data].length - 1).fill(0),
      ];
    });

    if (y < 0) {
      return 0;
    }
    if (x >= treePaths[0].length) {
      return 0;
    }

    if (maxPaths[x][y]) {
      return maxPaths[x][y];
    } else {
      maxPaths[x][y] =
        treePaths[x][y] +
        Math.max(
          getMaxPathLength(data, x + 1, y + 1),
          getMaxPathLength(data, x + 1, y)
        );
      return maxPaths[x][y];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tree.toString().trim() || !tree.toString().trim()) return;
    setResult(getMaxPathLength(tree, 0, 0));
    treeRef.current.focus();
  };

  return (
    <div className="pt-3">
      <h1 className="text-center mb-5">Triangle Tree</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTree(JSON.parse(e.target.value))}
          value={tree.length > 0 ? JSON.stringify(tree) : ""}
          name="tree"
          required
          ref={treeRef}
        />
        <button
          type="submit"
          className="btn btn-primary d-flex align-items-center mt-3 mx-auto"
        >
          Update <RiSendPlaneFill className="ms-1" />
        </button>
      </form>
      <h1 className="text-center mt-5">Result: {result || 0}</h1>
    </div>
  );
};

export default TriangleTree;
