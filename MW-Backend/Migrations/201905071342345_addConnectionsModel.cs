namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addConnectionsModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Connections",
                c => new
                    {
                        ConnectionId = c.String(nullable: false, maxLength: 128),
                        UserAgent = c.String(),
                        LastActivity = c.DateTime(nullable: false),
                        UserName = c.String(),
                        UserProfile_Id = c.Int(),
                    })
                .PrimaryKey(t => t.ConnectionId)
                .ForeignKey("dbo.UserProfiles", t => t.UserProfile_Id)
                .Index(t => t.UserProfile_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Connections", "UserProfile_Id", "dbo.UserProfiles");
            DropIndex("dbo.Connections", new[] { "UserProfile_Id" });
            DropTable("dbo.Connections");
        }
    }
}
