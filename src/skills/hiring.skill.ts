import { LuaSkill } from "lua-cli";
import { HiringPitchTool, TechnicalSkillsTool, ExperienceTool, ProjectShowcaseTool } from "../skills/tools/HiringTools";

const hiringSkill = new LuaSkill({
    name: "hiring-pitch-skill",
    description: "Comprehensive skill for advocating why employers should hire Sankalp",
    context: "This skill provides compelling arguments, technical details, and evidence for hiring Sankalp as a Full Stack Developer",
    tools: [
        new HiringPitchTool(),
        new TechnicalSkillsTool(), 
        new ExperienceTool(),
        new ProjectShowcaseTool()
    ],
});

export default hiringSkill;