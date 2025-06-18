import sys
import json

# Simulated ML skill extraction
def extract_skills(text):
    return ["Python", "JavaScript", "React", "MongoDB"]

if __name__ == "__main__":
    # Expecting file path as argument
    file_path = sys.argv[1]

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            resume_text = f.read()

        skills = extract_skills(resume_text)
        result = {
            "skills": skills,
            "matched_roles": ["Full Stack Developer", "Backend Engineer"]
        }
        print(json.dumps(result))  # Output as JSON to stdout
    except Exception as e:
        print(json.dumps({"error": str(e)}))
