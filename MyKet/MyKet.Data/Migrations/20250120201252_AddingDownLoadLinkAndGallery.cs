using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyKet.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddingDownLoadLinkAndGallery : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DownloadLink",
                table: "Applications",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Galery",
                table: "Applications",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DownloadLink",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "Galery",
                table: "Applications");
        }
    }
}
