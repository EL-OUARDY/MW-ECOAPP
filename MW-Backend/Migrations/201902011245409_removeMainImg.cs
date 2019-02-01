namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeMainImg : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Products", "MainImg");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "MainImg", c => c.String());
        }
    }
}
