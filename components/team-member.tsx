import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    bio: string
    expertise: string[]
    image: string
    linkedin?: string
    email?: string
  }
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30 group">
      <div className="space-y-4">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-4xl">
            {member.image}
          </div>
        </div>

        {/* Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{member.name}</h3>
          <p className="text-accent font-medium">{member.role}</p>
          <p className="text-muted-foreground text-sm text-pretty">{member.bio}</p>
        </div>

        {/* Expertise */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.expertise.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Contact */}
        <div className="flex justify-center space-x-3 pt-2">
          {member.linkedin && (
            <div className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4 text-primary" />
            </div>
          )}
          {member.email && (
            <div className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-accent" />
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
